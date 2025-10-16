import { Component, EventEmitter, inject, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO } from '../cines';

@Component({
  selector: 'app-formulario-cines',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css'
})
export class FormularioCinesComponent implements OnInit{
  
  ngOnInit(): void {

  }

  @Input()
  modelo?: CineCreacionDTO;

  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required]}]
  })


  guardarCambios(){
    if(!this.form.valid){
      return;
    }

    const cine = this.form.value as CineCreacionDTO;
    this.posteoFormulario.emit(cine);
  }

    obtenerErrorCampoCombre(): string {

    let nombre = this.form.controls.nombre
    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

}

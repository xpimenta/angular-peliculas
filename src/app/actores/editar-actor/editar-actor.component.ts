import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform: numberAttribute})
  id!:number

  actor: ActorDTO = {id:1, nombre:'Tom Holland', fechaNacimiento: new Date('1999-01-25')}

  guardarCambios(actor: ActorCreacionDTO){
    console.log('editando el actor', actor);
  }
}

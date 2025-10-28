import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from './peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selecttorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

generosSelecionados: SelectorMultipleDTO[] = [];
generosNoSelecionados: SelectorMultipleDTO[] = [
  {llave: 1, valor: 'Drama'},
  {llave: 2, valor: 'Acción'},
  {llave: 3, valor: 'Comedia'},
]


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('creando película', pelicula);
  }
}

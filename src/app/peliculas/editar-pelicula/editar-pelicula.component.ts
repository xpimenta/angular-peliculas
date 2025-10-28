import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../crear-pelicula/peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selecttorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!:number;

  pelicula: PeliculaDTO = {id:1, titulo: 'Spider-Man', trailer: 'ABC', fechaLanzamiento: new Date('2018-07-25'), poster: 'ttps://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'}

  generosSelecionados: SelectorMultipleDTO[] = [
    {llave: 2, valor: 'Acción'},
  ];
  generosNoSelecionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 3, valor: 'Comedia'},
  ]
  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log('editanto pelicula', pelicula);
  }

}

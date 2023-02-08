import { Component, OnInit } from '@angular/core';
import { LIBROS } from '../mocks';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {

libros:any;

  ngOnInit(): void { this.libros = LIBROS;  
}


}

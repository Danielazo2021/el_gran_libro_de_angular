import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Libro } from './libro.model';
import { LIBROS } from './mocks';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroObservableService {
  libros:any;
 
  constructor() { }

   getLibros(): Observable<Libro[]> {
              return new Observable<Libro[]>( observer => {
                          let libros: Libro[] = [];
                          observer.next([]);
                          
                          LIBROS.forEach((libro, index) => {
                                  setTimeout(() => {
                                  libros.push(libro);
                                          observer.next(libros);
                                          }, (index + 1) * 1500);
                                          });
                                          setTimeout(() => {observer.complete();}, 
                                          (LIBROS.length + 1) * 1500);
              });
 } 
  
}

import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LibroService } from '../libro.service';
import { LoggerService } from '../logger.service';
import { LIBROS } from '../mocks';
import { LibroObservableService } from '../libro-observable.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit{

  libros:any;

 
  constructor( private libroService:LibroService, private loggerService: LoggerService, private observableSubs: LibroObservableService ){

  }
  
  ngOnInit(): void {

     this.observableSubs.getLibros()
         .subscribe(
                    libros=> this.libros = libros,
                    error => console.log(error), 
                      () => console.log("this.LibroObservableService.getLibros() FINALIZADO")
          );
      
        

  /*
     this.libros= this.libroService.getLibros(); // forma sincronica
    this.libroService.getLibros()
                      .then(libros=> {                       
                        this.loggerService.log("Ejecucion del 1° then ");
                        return libros;})

                       /* .then(libros =>{
                          this.loggerService.log("ejecucion del 2° then ");
                          
                          return new Promise<Libro[]>((resolve, reject)=> {
                            this.loggerService.log("inicio del ejecutor (promise del 2° then)");

                            setTimeout(() => {
                              this.loggerService.log("Fin ejecutor (promise del 2°then)");
                            }, 5000);
                          }); })*/
                       /*
                          .then( libros => {
                          this.loggerService.log("Ejecucion del 2° then");
                          this.libros = libros;
                        });
               }*/

              

             // ngOnDestroy(){ 
            //  if (this.observableSubs)   this.observableSubs.unsubscribe(); 
          //   }
            }
          }

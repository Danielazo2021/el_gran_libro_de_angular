import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  template: `
    <p>
     {{title}} 
     </p>
     <br>
   //
     le paso por el template y no por un archivo html los datos del titulo
    
     <hr>
     <button (click)="probar()">Preciona para ver el mensaje</button>
     <h1> {{mensaje}} </h1>
  `,
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
title:string= "componente 1, desde un template propio de compo1.component.ts"

mensaje:string=""
probar(){
  this.mensaje= " que tengas un lindo dia!!"

}
}

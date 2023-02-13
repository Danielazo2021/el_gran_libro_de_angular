import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = '062_formValores';
  codigo:string="";
  nombre:string="";
  edad:number=0;
  sexo:string="";
  opcion:string="";
  comentarios:string="";
  activar:boolean=false;
  constructor(){

  }
  ngOnInit(){

  }

  mostrarVar(){
    console.log("Codigo (" +this.codigo+")" +
                " , Nombre (" +this.nombre+")"+
                " , Edad (" +this.edad+")"+
                " , Sexo (" +this.sexo+")"+
                 " , Opcion (" +this.opcion+")"+
                 " , Comentarios (" +this.comentarios+")"+
                " , Activar (" +this.activar+")");

  }
  onSubmit(){
    console.log("Submit");
  }
}

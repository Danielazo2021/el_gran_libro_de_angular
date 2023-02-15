import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FiltrarCaracteres } from './validacaracteres.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = '064_formValida';
  nombre:string="AAA"
constructor(){

}
ngOnInit(): void {
  
}
  submit(){
    console.log("se acaban de enviar los datos del formulario")
    

  }

}

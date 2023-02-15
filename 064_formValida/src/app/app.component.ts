import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = '064_formValida';
  

  submit(){
    console.log("se acaban de enviar los datos del formulario")
    

  }

}

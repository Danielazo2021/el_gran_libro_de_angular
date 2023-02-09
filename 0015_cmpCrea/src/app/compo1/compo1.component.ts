import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
texto:string="";
saludar(){this.texto= "hola mundo en compo1"}
ocultar_saludo(){this.texto= ""}
}

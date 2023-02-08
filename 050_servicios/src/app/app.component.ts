import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '050_servicios';
constructor(){}
ngOnInit(): void {
  
}
  ponerColor(){
    let style={
      'color': 'blue'
    }
    return style
   
  /*let styles={
    'font-size': this.hayLetraGrande? '300%': 'initial',
    'background-color':this.hayColorFondo? '#58FA58': '#FFFFFF',
    'color': this.hayLetraColor? 'red':'black',
    'font-style': this.hayLetraItalica? 'italic':'normal'
  };
  return styles;*/
  
  
  
  }
}

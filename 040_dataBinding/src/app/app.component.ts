import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '040_dataBinding';
  Libro={
   "titulo":"Hamlet",
   "autor":"William Shakespeare",
   "precio": 21.30,
   "stock": 5,
   "cantidad":0,
   "imagen": "../assets/old_book.png"
  };
downCantidad(libro:any){
if(libro.cantidad>0) libro.cantidad--;
}
upCantidad(libro:any){
  if(libro.cantidad < libro.stock) libro.cantidad++;
}

getCoord(event:any){
    console.log(event.clientX+ ", "+ event.clientY)
  }

}

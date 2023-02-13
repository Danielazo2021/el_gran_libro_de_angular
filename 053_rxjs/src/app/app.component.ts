import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '0053_rxjs';
  source:any;
  constructor(){}
   //source= Observable.interval(1000);
ngOnInit(): void {
                  this.source= interval(2000)
                            .subscribe( x => console.log( "iteracion n° "+ x))
    }


   

    
}

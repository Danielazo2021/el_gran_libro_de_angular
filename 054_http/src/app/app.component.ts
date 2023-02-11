import { Component , OnInit} from '@angular/core';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '054_http';
  constructor(){

  }
  ngOnInit(): void {
    
  }
}

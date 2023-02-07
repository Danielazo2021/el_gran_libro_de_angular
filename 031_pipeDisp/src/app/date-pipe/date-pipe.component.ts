import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent {
  fecha: Date= new Date(1988,3,15,12,30,15)
}

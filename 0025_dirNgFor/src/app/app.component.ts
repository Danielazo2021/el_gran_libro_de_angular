import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '0025_dirNgFor';
  public nombres=[
    {nom:"uno", edad:10},

    {nom:"dos", edad:20},

    {nom:"tres", edad:30}
  ];
}

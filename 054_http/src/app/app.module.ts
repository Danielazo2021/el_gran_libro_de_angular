import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptor } from './testInterceptor';
import { TestInterceptor2 } from './testInterceptor2';
@NgModule({
  declarations: [
    AppComponent,
    HttpClientTestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor2, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

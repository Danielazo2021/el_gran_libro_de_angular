import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse ,HttpErrorResponse} from "@angular/common/http";

import { Observable } from "rxjs";
@Injectable()
export class TestInterceptor2 implements HttpInterceptor{
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next
    .handle(req)
    //.do((event:any) => { if (event instanceof HttpResponse) { console.
   // log(event);} 
};
}


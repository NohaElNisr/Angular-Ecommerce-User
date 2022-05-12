import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAPIService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceeptorService implements HttpInterceptor {

  constructor(public auth: UserAPIService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
  
    return next.handle(request);
  }

}

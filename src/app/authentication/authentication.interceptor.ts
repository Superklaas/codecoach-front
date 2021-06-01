import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.hasToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getTokenString()}`
        }
      });
    }
    return next.handle(req);
  }
}

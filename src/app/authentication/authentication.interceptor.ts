import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import { TokenService } from './token.service';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add the auth token to the request if it is set
    if (this.tokenService.hasToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getTokenString()}`
        }
      });
    }

    return next.handle(req)

      // Replace bearer token when given from backend
      .pipe(tap((resp:HttpResponse<any>) => {
        if (resp.type !== 4) return;
        if (resp.headers.has("Authorization")) {
          this.tokenService.setToken(resp.headers.get('Authorization').replace('Bearer', '').trim());
          this.authService.refresh();
        }
      }))

      // Logout when the response contains an error that the JWT is flawed
      .pipe(catchError((resp: HttpResponse<any>) => {
          if (resp.headers.has("www-authenticate") && resp.headers.get("www-authenticate").match("JWT")) {
            this.authService.logout();
          }
          return throwError(resp);
        }
      ));
  }
}

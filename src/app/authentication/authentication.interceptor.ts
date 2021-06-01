import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { TokenService } from './token.service';
import { catchError, tap } from 'rxjs/operators';


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

    return next.handle(req).pipe(catchError((resp: HttpResponse<any>) => {
        // Check the response of the request and
        if (resp.headers.has("www-authenticate") && resp.headers.get("www-authenticate").match("JWT")) {
          this.tokenService.clearToken();
        }

        throw resp;
      }
    ));
  }
}

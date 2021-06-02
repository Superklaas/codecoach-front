import {Injectable} from '@angular/core';
import {AuthenticationHttpService} from './authentication.http.service';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import { Token } from './Token';
import { TokenService } from './token.service';
import { AuthSession } from './AuthSession';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authSession: AuthSession = new AuthSession(null);
  private sessionSource = new BehaviorSubject<AuthSession>(this.authSession);
  session$ = this.sessionSource.asObservable();

  constructor(private loginService: AuthenticationHttpService, private tokenService: TokenService) {
    this.refresh();
  }

  getSession(): AuthSession {
    return this.authSession;
  }

  login(loginData: any) {
    return this.loginService.login(loginData); // The interceptor will take care of the returned bearer token
  }

  logout() {
    this.tokenService.clearToken();
    this.refresh();
  }

  refresh() {
    this.authSession = new AuthSession(this.tokenService.getToken());
    this.sessionSource.next(this.authSession);
  }



}

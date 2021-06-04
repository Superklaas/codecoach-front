import {Injectable} from '@angular/core';
import {AuthenticationHttpService} from './authentication.http.service';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import { Token } from './Token';
import { TokenService } from './token.service';
import { AuthSession } from './AuthSession';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authSession: AuthSession = new AuthSession(null);
  private sessionSource = new BehaviorSubject<AuthSession>(this.authSession);
  public readonly session$ = this.sessionSource.asObservable();

  constructor(private loginService: AuthenticationHttpService, private tokenService: TokenService, private router: Router) {
    this.tokenService.timeout$.subscribe(() => {
      this.refresh()
      this.router.navigate(["login"])
    });
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

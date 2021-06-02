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

  private userLoggedInSource = new ReplaySubject<boolean>(); // DEPRECATED
  userLoggedIn$ = this.userLoggedInSource.asObservable(); // DEPRECATED

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
    this.userLoggedInSource.next(this.authSession.isLoggedIn()); // DEPRECATED
  }

  // DEPRECATION WARNING

  getDecodedToken(): Token { // DEPRECATED
    return this.tokenService.getToken();
  }

  getToken() { // DEPRECATED
    return this.tokenService.getTokenString();
  }

  getProfileName() { // DEPRECATED
    return this.getDecodedToken().profileName;
  }

  getRole(){ // DEPRECATED
    return this.getDecodedToken().role;
  }

  getId() { // DEPRECATED
    return this.getDecodedToken().sub;
  }

  isLoggedIn() { // DEPRECATED
    return this.authSession.isLoggedIn();
  }

}

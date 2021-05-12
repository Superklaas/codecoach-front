import { Injectable } from '@angular/core';
import { AuthenticationHttpService } from './authentication.http.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Token } from '../model/Token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'jwt_token';
  private usernameKey = 'username';
  private userLoggedInSource = new Subject<boolean>();
  userLoggedIn$ = this.userLoggedInSource.asObservable();

  constructor(private loginService: AuthenticationHttpService) {
  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        sessionStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer', '').trim());
        sessionStorage.setItem(this.usernameKey, loginData.username);
        this.userLoggedInSource.next(true);
      }))
      ;

  }

  getDecodedToken(): Token{
    return jwt_decode(this.getToken());
  }

  getToken() {
    return sessionStorage.getItem(this.tokenKey);
  }

  getProfileName() {
    return this.getDecodedToken().profileName;
  }
  getUsername() {
    return sessionStorage.getItem(this.usernameKey);
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.tokenKey) !== null;
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.usernameKey);
    this.userLoggedInSource.next(false);
  }
}

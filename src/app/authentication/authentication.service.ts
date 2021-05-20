import { Injectable } from '@angular/core';
import { AuthenticationHttpService } from './authentication.http.service';
import { tap } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Token } from '../model/Token';
import { User } from '../model/User';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'jwt_token';
  private usernameKey = 'username';
  private userLoggedInSource = new ReplaySubject<boolean>();
  userLoggedIn$ = this.userLoggedInSource.asObservable();
  private currentUser = new ReplaySubject<User>();
  currentUser$ = this.currentUser.asObservable();

  constructor(private loginService: AuthenticationHttpService, private userService: UserService) {
    if (this.getToken()) {
      this.userLoggedInSource.next(true);
    } else {
      this.userLoggedInSource.next(false);
    }

  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        localStorage.setItem(this.tokenKey, response.headers.get('Authorization').replace('Bearer', '').trim());
        localStorage.setItem(this.usernameKey, loginData.username);
        this.userLoggedInSource.next(true);
      }))
      ;
  }

  getDecodedToken(): Token {
    return jwt_decode(this.getToken());
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getProfileName() {
    return this.getDecodedToken().profileName;
  }
  getUsername() {
    return localStorage.getItem(this.usernameKey);
  }

  getRole(){
    return this.getDecodedToken().role;
  }

  getId() {
    return this.getDecodedToken().sub;
  }

  isLoggedIn() {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.usernameKey);
    this.userLoggedInSource.next(false);
  }
}

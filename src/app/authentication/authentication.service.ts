import {Injectable} from '@angular/core';
import {AuthenticationHttpService} from './authentication.http.service';
import {tap} from 'rxjs/operators';
import {ReplaySubject} from 'rxjs';
import jwt_decode from "jwt-decode";
import { User } from '../utility/model/User';
import { UserService } from '../utility/service/user.service';
import { Token } from '../utility/model/Token';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usernameKey = 'username';
  private userLoggedInSource = new ReplaySubject<boolean>();
  userLoggedIn$ = this.userLoggedInSource.asObservable();
  private currentUser = new ReplaySubject<User>();
  currentUser$ = this.currentUser.asObservable();

  constructor(private loginService: AuthenticationHttpService, private userService: UserService, private tokenService: TokenService) {

    this.tokenService.token$.subscribe(token => {
      this.userLoggedInSource.next(!!token);
      this.currentUser.next(null);
    })

  }

  login(loginData: any) {
    return this.loginService.login(loginData)
      .pipe(tap(response => {
        this.tokenService.setToken(response.headers.get('Authorization').replace('Bearer', '').trim());
        localStorage.setItem(this.usernameKey, loginData.username);
      }));
  }

  getDecodedToken(): Token {
    return this.tokenService.getToken();
  }

  getToken() {
    return this.tokenService.getTokenString();
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
    console.log(this.tokenService.hasToken());
    return this.tokenService.hasToken();
  }

  logout() {
    this.tokenService.clearToken();
    localStorage.removeItem(this.usernameKey);
    this.userLoggedInSource.next(false);
  }
}

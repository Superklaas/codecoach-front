import { Injectable } from '@angular/core';
import { Token } from '../utility/model/Token';
import jwt_decode from "jwt-decode";
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

const TOKEN_KEY = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenString: string | null = null;
  private token: Token | null = null;
  private tokenSubject = new ReplaySubject<Token>();

  public token$ = this.tokenSubject.asObservable();

  constructor(private router: Router) {
    this.initToken();
  }

  private initToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      try {
        this.setToken(token);
      } catch (err) {
        this.clearToken();
      }
    } else {
      this.tokenSubject.next(null);
    }

  }

  public setToken(token: string) {
    this.token = jwt_decode(token);
    this.tokenString = token;
    localStorage.setItem(TOKEN_KEY, token);
    this.tokenSubject.next(this.token);
  }

  public clearToken() {
    this.tokenString = null;
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
    this.tokenSubject.next(null);
    this.router.navigateByUrl("/login");
  }

  public getToken(): Token {
    return this.token;
  }

  public getTokenString() {
    return this.tokenString;
  }

  public hasToken() {
    return !!this.token;
  }

}

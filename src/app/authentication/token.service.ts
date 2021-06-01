import { Injectable } from '@angular/core';
import { Token } from '../utility/model/Token';
import jwt_decode from "jwt-decode";
import { ReplaySubject } from 'rxjs';

const TOKEN_KEY = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenString: string | null = null;
  private token: Token | null = null;
  private tokenSubject = new ReplaySubject<Token>();

  public token$ = this.tokenSubject.asObservable();

  constructor() {
    this.initToken();
  }

  private initToken() {
    const tokenData = localStorage.getItem(TOKEN_KEY);
    if (!tokenData) {
      localStorage.removeItem(TOKEN_KEY);
      return;
    }
    this.setToken(tokenData);
  }

  public setToken(token: string) {
    this.tokenString = token;
    this.token = jwt_decode(token);
    this.tokenSubject.next(this.token);
  }

  public clearToken() {
    this.tokenString = null;
    this.token = null;
    this.tokenSubject.next(null);
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

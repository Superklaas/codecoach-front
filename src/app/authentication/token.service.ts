import { Injectable } from '@angular/core';
import { Token } from './Token';
import jwt_decode from "jwt-decode";

const TOKEN_KEY = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenString: string | null = null;
  private token: Token | null = null;

  constructor() {
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
    }
  }

  public setToken(token: string) {
    this.token = jwt_decode(token);
    this.tokenString = token;
    localStorage.setItem(TOKEN_KEY, token);
  }

  public clearToken() {
    this.tokenString = null;
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
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

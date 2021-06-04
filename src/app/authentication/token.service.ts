import { Injectable } from '@angular/core';
import { Token } from './Token';
import jwt_decode from "jwt-decode";
import { Observable, Subject } from 'rxjs';

const TOKEN_KEY = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenString: string | null = null;
  private token: Token | null = null;
  private tokenExpirationTimer: number | null = null;

  private timeout = new Subject<void>();
  public timeout$: Observable<void> = this.timeout.asObservable();

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
    if (this.token.exp < (Date.now() / 1000)) {
      throw new Error("trying to set an expired token");
    }
    this.tokenString = token;
    localStorage.setItem(TOKEN_KEY, token);
    this.refreshTokenTimer();
  }

  public clearToken() {
    this.tokenString = null;
    this.token = null;
    localStorage.removeItem(TOKEN_KEY);
    this.refreshTokenTimer();
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

  private refreshTokenTimer() {
    if (this.tokenExpirationTimer !== null) clearTimeout(this.tokenExpirationTimer);
    this.tokenExpirationTimer = (this.token)
      ? setTimeout(() => {
        this.clearToken();
        this.timeout.next();
      }, (this.token.exp * 1000) - Date.now()) as unknown as number
      : null;
  }

}

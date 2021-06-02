import { Token } from "./Token";

export class AuthSession {
  constructor(private token?: Token) {}

  isLoggedIn(): boolean {
    return !!this.token;
  }

  isCoachee(): boolean {
    return this.token && this.token.role === 'COACHEE';
  }

  isCoach(): boolean {
    return this.token && this.token.role === 'COACH';
  }

  isAdmin(): boolean {
    return this.token &&  this.token.role === 'ADMIN';
  }
}

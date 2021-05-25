import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {User} from "../model/User";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/users`
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.url,user)
      .pipe(catchError(this.handleError('register'))
    );
  }

  getAllCoaches(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/coaches`)
      .pipe(map(users => users.sort((a,b) => a.lastName.localeCompare(b.lastName))));
  }

  get(id: number):  Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  updateRole(id: number): Observable<User> {
    return this.http.post<User>(`${this.url}/${id}/coachify`, null);
  }

  sendResetToken(email: string, url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Email': email
      })
    };
    return this.http.post<any>(`${this.url}/forgot-password`, url, httpOptions);
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.url}/reset-password?token=${token}`, newPassword);
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      return throwError(error);
    };
  }


}

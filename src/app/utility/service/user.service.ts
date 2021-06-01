import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

import {User} from "../model/User";
import {Topic} from "../model/Topic";
import { environment } from 'src/environments/environment';
import {CoachRequest} from "../model/CoachRequest";

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

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  get(id: number):  Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  coachRequest(id: number, request: CoachRequest) {
    return this.http.post<User>(`${this.url}/${id}/coachify`, request);
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

  update(user: User, id: number): Observable<User>{
    return this.http.put<User>(`${this.url}/${id}`, user);
  }

  updateCoach(user: User, id: number): Observable<User>{
    return this.http.put<User>(`${this.url}/${id}/coach`, user);
  }

  updateTopics(newTopics: Topic[], id: number): Observable<Topic[]> {
    return this.http.post<Topic[]>(`${this.url}/${id}/topics`, newTopics);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {User} from "../model/User";
import {catchError} from "rxjs/operators";

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

  get(id: number):  Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  updateRole(id: number): Observable<User> {
    return this.http.post<User>(`${this.url}/${id}/coachify`, null);
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      return throwError(error);
    };
  }


}

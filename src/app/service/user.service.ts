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
    return this.http.post<User>(this.url,user).pipe(catchError(this.handleError('register'))
    );
  }

  private handleError(operation = 'operation') {
    return (error: any) => {
      console.error(error);
      return throwError(error);
    };
  }


  /*

  .pipe(
      tap(x => x.length ?
    this.log(`found heroes matching "${term}"`) :
  this.log(`no heroes matching "${term}"`)),
  catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

  console.error(error); // log to console instead

  this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
  return of(result as T);
  };
  */



}

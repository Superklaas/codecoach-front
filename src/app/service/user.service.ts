import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/users`
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  get(id: number):  Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }


}

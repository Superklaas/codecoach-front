import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Topic} from "../model/Topic";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/topics`
  }

  getAllTopics() {
    return this.http.get<Topic[]>(this.url);
  }

  getAllUsedTopics() {
    return this.http.get<Topic[]>(this.url+"/used");
  }

  updateTopics(newTopics: Topic[], id: number): Observable<Topic[]> {
    return this.http.post<Topic[]>(`${this.url}/${id}/topics`, newTopics);
  }

}

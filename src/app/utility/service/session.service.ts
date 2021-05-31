import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Session} from "../model/Session";
import {FeedbackForCoachee} from "../model/FeedbackForCoachee";
import {FeedbackForCoach} from "../model/FeedbackForCoach";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/sessions`
  }

  create(session: Session): Observable<Session>{
    return this.http.post<Session>(this.url, session);
  }

  getCoacheeSessions(): Observable<Session[]>{
    return this.http.get<Session[]>(`${this.url}/coachee`);
  }

  getCoachSessions(): Observable<Session[]>{
    return this.http.get<Session[]>(`${this.url}/coach`);
  }

  updateSession(id: number, status: string): Observable<Session>{
    return this.http.post<Session>(`${this.url}/${id}/status`, {"status":status});
  }

  updateCoachFeedback(id: number, feedbackForCoachee: FeedbackForCoachee): Observable<Session>{
    console.log(feedbackForCoachee)
    return this.http.post<Session>(`${this.url}/${id}/feedback-for-coachee`, feedbackForCoachee);
  }

  updateCoacheeFeedback(id: number, feedbackForCoach: FeedbackForCoach): Observable<Session>{
    console.log(feedbackForCoach)
    return this.http.post<Session>(`${this.url}/${id}/feedback-for-coach`, feedbackForCoach);
  }
}

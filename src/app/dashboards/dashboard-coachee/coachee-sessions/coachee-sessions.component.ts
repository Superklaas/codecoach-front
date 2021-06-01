import {Component, OnInit} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';
import { SessionQuery } from 'src/app/utility/queries/SessionQuery';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-coachee-sessions',
  templateUrl: './coachee-sessions.component.html',
  styleUrls: ['./coachee-sessions.component.css']
})
export class CoacheeSessionsComponent implements OnInit {
  public sessions: Session[]= [];

  futureSessions: Session[] = [];
  waitingSessions: Session[] = [];
  archivedSessions: Session[] = [];

  loaded: boolean = false;

  public sessionQuery: SessionQuery = new SessionQuery(this.sessionService.getCoacheeSessions());


  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.sessionQuery.sessions$.subscribe(sessions => {
      if (!sessions) return;

      this.sessions = sessions;
      this.sortSessions(this.sessions);
      this.loaded=true;
    });
  }

   isInTheFuture(session: Session): boolean{
    let sessionTime = Date.parse(`${session.date}T${session.startTime}`)
    return sessionTime > Date.parse(new Date().toString());
  }

  sortSessions(sessions: Session[]) {
    this.archivedSessions = [];
    this.futureSessions = [];
    this.waitingSessions = [];

    for (let session of sessions) {
      if( ['REQUEST_CANCELLED_BY_COACHEE', 'SESSION_CANCELLED_BY_COACH', 'SESSION_CANCELLED_BY_COACHEE', 'REQUEST_DECLINED'].includes(session.status)) {
        this.archivedSessions.push(session);
      }
      else if (this.isInTheFuture(session)) {
        this.futureSessions.push(session);
      }
      else if (session.status == 'WAITING_FEEDBACK') {
        this.waitingSessions.push(session);
      } else {
        this.archivedSessions.push(session);
      }
    }
  }

}

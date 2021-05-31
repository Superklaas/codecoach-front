import { Component, OnInit } from '@angular/core';

import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-coach-sessions',
  templateUrl: './coach-sessions.component.html',
  styleUrls: ['./coach-sessions.component.css']
})
export class CoachSessionsComponent implements OnInit {
  public sessions: Session[] = [];

  futureSessions: Session[] = [];
  waitingSessions: Session[] = [];
  archivedSessions: Session[] = [];
  loaded: boolean = false;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getCoachSessions().subscribe(sessions => {
      this.sessions = sessions;
      this.sortSessions(this.sessions);
      this.loaded = true;
    });
  }

  hasStatusRequested(session: Session): boolean {
    return session.status === "REQUESTED"
  }

  isInTheFuture(session: Session): boolean {
    let sessionTime = Date.parse(`${session.date} ${session.startTime}`)
    if (sessionTime > Date.parse(new Date().toString())) {
      return true;
    }
    return false;
  }

  sortSessions(sessions: Session[]) {
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

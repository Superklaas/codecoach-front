import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../service/session.service";
import {Observable} from "rxjs";
import {Session} from "../../model/Session";

@Component({
  selector: 'app-coach-sessions',
  templateUrl: './coach-sessions.component.html',
  styleUrls: ['./coach-sessions.component.css']
})
export class CoachSessionsComponent implements OnInit {
  public sessions$: Observable<Session[]>

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessions$ = this.sessionService.getCoachSessions();
  }

  HasArchivedSessions(sessions: Session[]) {
    for (let i = 0; i < sessions.length; i++) {
      let sessionTime = Date.parse(`${sessions[i].date} ${sessions[i].startTime}`)
      if (sessionTime < Date.parse(new Date().toString())) {
        return true;
      }
    }
  }

  hasStatusRequested(session: Session): boolean{
    return session.status==="REQUESTED"
  }

}

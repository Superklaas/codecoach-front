import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../service/session.service";
import {Session} from "../../model/Session";
import {Observable} from "rxjs";


@Component({
  selector: 'app-coachee-sessions',
  templateUrl: './coachee-sessions.component.html',
  styleUrls: ['./coachee-sessions.component.css']
})
export class CoacheeSessionsComponent implements OnInit {
  public sessions$: Observable<Session[]>;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.sessions$ = this.sessionService.getCoacheeSessions();
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

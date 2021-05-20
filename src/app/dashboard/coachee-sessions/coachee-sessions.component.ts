import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../service/session.service";
import {Session} from "../../model/Session";
import {Observable} from "rxjs";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-coachee-sessions',
  templateUrl: './coachee-sessions.component.html',
  styleUrls: ['./coachee-sessions.component.css']
})
export class CoacheeSessionsComponent implements OnInit {
  public sessions$: Observable<Session[]>;

  constructor(private sessionService: SessionService, private userService: UserService) { }

  ngOnInit(): void {
    this.sessions$ = this.sessionService.getCoacheeSessions();
  }

  HasArchivedSessions(sessions: Session[]) {
    for (let i = 0; i < sessions.length ; i++){
      let dateTime = new Date()
      let sesseionTime = Date.parse(`${sessions[i].date} ${sessions[i].startTime}`)

      if (sesseionTime > Date.parse(dateTime.toString())){
        return true;
      }
    }
  }
}

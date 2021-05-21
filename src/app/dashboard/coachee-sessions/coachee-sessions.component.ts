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
  public sessions: Session[]= [];

  futureSessions: Session[] = [];
  waitingSessions: Session[] = [];
  archivedSessions: Session[] = [];

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.sessionService.getCoacheeSessions().subscribe(sessions => {
      this.sessions = sessions;
      this.sortSessions(this.sessions);
    });
  }

   isInTheFuture(session: Session): boolean{
    let sessionTime = Date.parse(`${session.date} ${session.startTime}`)
    if (sessionTime > Date.parse(new Date().toString())) {
      return true;
    }
    return false;
  }

  sortSessions(sessions: Session[]){
    for(let session of sessions){
      if (this.isInTheFuture(session)){
        this.futureSessions.push(session);
      }
      else if(session.status=='WAITING_FEEDBACK'){
        this.waitingSessions.push(session);
      }else {
        this.archivedSessions.push(session);
      }
    }
  }

}

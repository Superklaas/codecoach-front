import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/Session';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-requested-coach-session-details',
  templateUrl: './requested-coach-session-details.component.html',
  styleUrls: ['./requested-coach-session-details.component.css']
})
export class RequestedCoachSessionDetailsComponent implements OnInit {
  @Input()
  session: Session

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  
  accept(session: Session) {
    console.log("in accept");
    this.sessionService.updateSession(session.id, 'ACCEPTED').subscribe(session => window.location.reload());
  }
  
  decline(session: Session) {
    this.sessionService.updateSession(session.id, 'REQUEST_DECLINED').subscribe(session => window.location.reload());
  }

}

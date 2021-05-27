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
    this.sessionService.updateSession(session.id, 'ACCEPTED').subscribe(_ => window.location.reload());
  }

  decline(session: Session) {
    this.sessionService.updateSession(session.id, 'REQUEST_DECLINED').subscribe(_ => window.location.reload());
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/Session';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-cancellable-session-details',
  templateUrl: './cancellable-session-details.component.html',
  styleUrls: ['./cancellable-session-details.component.css']
})
export class CancellableSessionDetailsComponent implements OnInit {
  @Input()
  public perspective: 'coach' | 'coachee';

  @Input()
  cancelStatus: 'SESSION_CANCELLED_BY_COACHEE' | 'SESSION_CANCELLED_BY_COACH' | 'REQUEST_CANCELLED_BY_COACHEE';

  @Input()
  public session: Session


  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  cancelSession() {
    this.sessionService.updateSession(this.session.id, this.cancelStatus)
      .subscribe(_ => window.location.reload() )
  }

}

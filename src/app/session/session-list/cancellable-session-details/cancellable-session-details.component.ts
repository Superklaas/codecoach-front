import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-cancellable-session-details',
  templateUrl: './cancellable-session-details.component.html',
  styleUrls: ['./cancellable-session-details.component.css']
})
export class CancellableSessionDetailsComponent implements OnInit {
  @Input()
  public perspective: 'coach' | 'coachee';
  currentWindowWidth: number = window.innerWidth;

  @Input()
  cancelStatus: 'SESSION_CANCELLED_BY_COACHEE' | 'SESSION_CANCELLED_BY_COACH' | 'REQUEST_CANCELLED_BY_COACHEE';

  @Input()
  public session: Session

  @Output()
  sessionUpdate = new EventEmitter<Session>();

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  cancelSession() {
    this.sessionService.updateSession(this.session.id, this.cancelStatus)
      .subscribe(session => this.sessionUpdate.emit(session) )
  }

  isMobile(): boolean {
    return this.currentWindowWidth <= 1230;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

}

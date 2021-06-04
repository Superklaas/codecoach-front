import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-requested-coach-session-details',
  templateUrl: './requested-coach-session-details.component.html',
  styleUrls: ['./requested-coach-session-details.component.css']
})
export class RequestedCoachSessionDetailsComponent implements OnInit {
  @Input()
  session: Session

  @Output()
  sessionUpdate = new EventEmitter<Session>();

  currentWindowWidth: number= window.innerWidth;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  accept(session: Session) {
    this.sessionService.updateSessionStatus(session.id, 'ACCEPTED').subscribe(session => this.sessionUpdate.emit(session) );
  }

  decline(session: Session) {
    this.sessionService.updateSessionStatus(session.id, 'REQUEST_DECLINED').subscribe(session => this.sessionUpdate.emit(session) );
  }

  isMobile(): boolean {
    return this.currentWindowWidth <= 1230;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }
}

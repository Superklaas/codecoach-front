import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-session-list-item',
  templateUrl: './session-list-item.component.html',
  styleUrls: ['./session-list-item.component.css']
})
export class SessionListItemComponent implements OnInit {

  @Input()
  session: Session

  @Input()
  perspective: 'coachee' | 'coach';

  @Output()
  sessionUpdate = new EventEmitter<Session>();

  constructor() { }

  ngOnInit(): void {
  }

}

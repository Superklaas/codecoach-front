import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/Session';

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

  constructor() { }

  ngOnInit(): void {
  }

}

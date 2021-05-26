import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/Session';

@Component({
  selector: 'app-common-session-details',
  templateUrl: './common-session-details.component.html',
  styleUrls: ['./common-session-details.component.css']
})
export class CommonSessionDetailsComponent implements OnInit {

  @Input()
  session: Session

  @Input()
  perspective: 'coachee' | 'coach';
  
  constructor() { }

  ngOnInit(): void {
  }

}

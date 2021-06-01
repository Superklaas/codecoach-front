import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent implements OnInit {

  loaded: boolean = false; 
  sessions: Session[] = [];
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.get().subscribe(sessions => {
      this.sessions = sessions;
      this.loaded = true;
    })
  }

}

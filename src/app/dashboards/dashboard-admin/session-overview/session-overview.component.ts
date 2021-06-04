import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/utility/model/Session';
import { SessionService } from 'src/app/utility/service/session.service';
import {RolePersonalisationService} from "../../../utility/service/role-personalisation.service";

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent implements OnInit {

  loaded: boolean = false;
  sessions: Session[] = [];
  pageOfSessions: Array<any>;


  constructor(private sessionService: SessionService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.sessionService.get().subscribe(sessions => {
      this.sessions = sessions;
      this.loaded = true;
    })
  }

  onChangePage(pageOfSessions: Array<any>) {
    this.pageOfSessions = pageOfSessions;
  }

  get color() {
    return this.roleStuff.color;
  }

}

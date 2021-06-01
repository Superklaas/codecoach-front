import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import { User } from 'src/app/utility/model/User';
import { UserService } from 'src/app/utility/service/user.service';
import { XpService } from 'src/app/utility/service/xp.service';

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {

  coaches$: Observable<User[]>;

  constructor(private userService: UserService, private xpService: XpService) { }

  ngOnInit(): void {
    this.coaches$ = this.userService.getAllCoaches();
  }

  getXpLevel(user: User){
    return this.xpService.getXpLevel(user.xp);
  }

}

import {Component, OnInit} from '@angular/core';

import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { UserService } from 'src/app/utility/service/user.service';
import {User} from "../../../utility/model/User";


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  loaded: boolean = false;
  users: User[] = [];
  pageOfUsers: Array<any>;

  constructor(private userService: UserService, private roleStuff: RolePersonalisationService) {
  }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe(users => {
        this.users = users;
        this.loaded = true;
      })
  }

  onChangePage(pageOfUsers: Array<any>) {
    this.pageOfUsers = pageOfUsers;
  }

  get color() {
    return this.roleStuff.color;
  }

}

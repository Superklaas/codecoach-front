import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from 'src/app/model/User';
import {UserService} from 'src/app/service/user.service';
import {RolePersonalisationService} from "../../service/role-personalisation.service";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UserService, private roleStuff: RolePersonalisationService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  get color() {
    return this.roleStuff.color;
  }

}

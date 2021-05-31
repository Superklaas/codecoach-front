import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { UserService } from 'src/app/utility/service/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  private _role: string;

  constructor(private authService: AuthenticationService, private userService: UserService, private roleStuff: RolePersonalisationService) {
  }

  ngOnInit(): void {
    this.userService.get(Number(this.authService.getId()))
      .subscribe(user => this._role = user.role)
  }

  get role(): string {
    return this._role;
  }

  get color() {
    return this.roleStuff.color;
  }

}

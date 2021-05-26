import {Component, OnInit} from '@angular/core';
import {RolePersonalisationService} from '../service/role-personalisation.service';
import {ProfileService} from "../service/profile.service";
import {UserService} from "../service/user.service";
import {AuthenticationService} from "../authentication/authentication.service";

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

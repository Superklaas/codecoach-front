import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { UserService } from 'src/app/utility/service/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(public authService: AuthenticationService, private profileService: ProfileService, private roleStuff: RolePersonalisationService) {
  }

  ngOnInit(): void {
  }

  get color() {
    return this.roleStuff.color;
  }

}

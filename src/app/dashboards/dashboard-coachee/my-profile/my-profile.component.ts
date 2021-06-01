/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component,  OnInit } from '@angular/core';

import { User } from 'src/app/utility/model/User';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import {UserService} from "../../../utility/service/user.service";
import {AuthenticationService} from "../../../authentication/authentication.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userImage = "";
  user?: User;
  constructor(private userService: UserService, private authService: AuthenticationService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    const id = this.authService.getId();
    this.userService.get(+id).subscribe(user => {
      this.user = user;
      this.userImage = this.setUserImage;
    });
  }

  get setUserImage() {
    if (!this.user.imageUrl) {
      return "assets/images/default-person.png";
    }
    return this.user.imageUrl;
  }

  get color() {
    return this.roleStuff.color;
  }

}

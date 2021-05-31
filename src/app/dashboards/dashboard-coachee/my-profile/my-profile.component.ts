/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component,  OnInit } from '@angular/core';

import { User } from 'src/app/utility/model/User';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User;
  constructor(public profileService: ProfileService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.profileService.currentUser$.subscribe(user => this.user = user);
  }
  get userImage() {
    if (!this.user.imageUrl) {
      return "assets/images/default-person.png";
    }
    return this.user.imageUrl;
  }

  get color() {
    return this.roleStuff.color;
  }

}

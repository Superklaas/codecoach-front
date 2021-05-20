/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/model/User';
import { ProfileService } from 'src/app/service/profile.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  user: User;
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.currentUser$.subscribe(user => this.user = user);
  }
  get userImage() {
    if (!this.user.imageUrl) {
      return "assets/images/default-person.png";
    }
    return this.user.imageUrl;
  }

}

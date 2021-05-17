/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  user: User;
  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    if (!this.authenticationService.isLoggedIn()) return;
    this.userService.get(Number(this.authenticationService.getId())).subscribe(user => this.user = user);
  }

}

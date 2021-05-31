import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {
  constructor(public profileService: ProfileService, private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  becomeCoach(): void {
    this.userService.updateRole(+this.authService.getId())
      .subscribe();
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {ProfileService} from "../../service/profile.service";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {

  @Input() user: User;
  constructor(public profileService: ProfileService, private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  becomeCoach(): void {
    this.userService.updateRole(+this.authService.getId())
      .subscribe(user => this.user = user);
  }

}

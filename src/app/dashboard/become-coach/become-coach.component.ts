import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {

  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  becomeCoach(): void {
    this.userService.updateRole(this.user.id)
      .subscribe(user => this.user = user);
  }

}

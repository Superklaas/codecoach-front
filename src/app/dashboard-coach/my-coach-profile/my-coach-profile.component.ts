import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ProfileService } from 'src/app/service/profile.service';
import {RolePersonalisationService} from "../../service/role-personalisation.service";

@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit {

  user: User;
  constructor(public profileService: ProfileService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.profileService.currentUser$.subscribe(user => this.user = user);
  }

  get color() {
    return this.roleStuff.color;
  }


}

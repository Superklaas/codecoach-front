import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/utility/model/User';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import {AuthenticationService} from "../../../authentication/authentication.service";
import { XpService } from 'src/app/utility/service/xp.service';



@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit {

  user: User;

  constructor(private profileService: ProfileService, private roleStuff: RolePersonalisationService, private xpService: XpService) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    this.profileService.currentUser$.subscribe(user => {
      this.user = user;
    });
  }

  get color() {
    return this.roleStuff.color;
  }


  get xpLevel(): string{
    return this.xpService.getXpLevel(this.user.xp);
  }

  get xpPercentage(): string{
    return Math.round(this.xpService.getXpPercentage(this.user.xp)*100)+'%';
  }

  get nextThreshHold(): string{
    return this.xpService.getNextThreshhold(this.user.xp);
  }


}

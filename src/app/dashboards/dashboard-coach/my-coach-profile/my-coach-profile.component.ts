import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/utility/model/User';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import {UserService} from "../../../utility/service/user.service";
import {AuthenticationService} from "../../../authentication/authentication.service";
import { XpService } from 'src/app/utility/service/xp.service';



@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit {

  user: User;
  topicEditor: boolean;

  constructor(private userService: UserService, private authService: AuthenticationService, private roleStuff: RolePersonalisationService, private xpService: XpService) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    const id = this.authService.getId();
    this.userService.get(+id).subscribe(user => {
      this.user = user;
    });
  }

  openTopicsEditor() {
    this.topicEditor = true;
  }

  closeTopicEditor(saved: boolean) {
    this.topicEditor = false;
    if (saved) {
      this.displayUser();
    }
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

import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../utility/model/User';
import { UserService } from '../utility/service/user.service';
import { XpService } from '../utility/service/xp.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  currentWindowWidth: number;


  constructor(private route: ActivatedRoute, private userService: UserService, public authService: AuthenticationService, private xpService: XpService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(id).subscribe(user => this.user = user);

  }

  isMobile(): boolean {
    return this.currentWindowWidth >= 400;
  }

  get userImage() {
    if (!this.user.imageUrl) {
      return "assets/images/default-person.png";
    }
    return this.user.imageUrl;
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

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

}

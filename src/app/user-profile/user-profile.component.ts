import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  isLoggedIn: boolean;
  role: string;
  currentWindowWidth: number;


  constructor(private route: ActivatedRoute, private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(id).subscribe(user => this.user = user);
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.role = this.authenticationService.getRole();
      this.currentWindowWidth = window.innerWidth;
    });


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

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }

}

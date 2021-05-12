import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username;
  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.username = isLoggedIn ? this.authenticationService.getProfileName(): undefined ;
      this.isLoggedIn =isLoggedIn;
    });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/home`);
  }
}

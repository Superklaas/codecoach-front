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

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.username = undefined;
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.username = isLoggedIn ? this.authenticationService.getProfileName(): undefined ;
    });
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/home`);
  }
}

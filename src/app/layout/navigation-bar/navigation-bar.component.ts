import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.username = 'Profile';
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => { 
      this.username = isLoggedIn ? this.authenticationService.getProfileName(): undefined ;
    });
  }


}

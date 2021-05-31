import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/utility/model/User';


@Component({
  selector: 'app-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.css']
})
export class CoachDashboardComponent implements OnInit {

  user: User;
  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService) { }

 
  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }
}

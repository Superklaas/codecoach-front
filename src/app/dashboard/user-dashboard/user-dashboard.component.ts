import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
   
  }


}

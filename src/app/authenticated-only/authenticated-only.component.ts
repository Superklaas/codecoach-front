import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-authenticated-only',
  templateUrl: './authenticated-only.component.html',
  styleUrls: ['./authenticated-only.component.css']
})
export class AuthenticatedOnlyComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => { 
      this.isLoggedIn =isLoggedIn;
    });
  }

}

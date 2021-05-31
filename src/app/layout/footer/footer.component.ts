import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  get color() {
    return this.roleStuff.color;
  }


}

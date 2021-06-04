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
  constructor(private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.authenticationService.session$.subscribe(session => {
      this.isLoggedIn = session.isLoggedIn();
    });
  }


}

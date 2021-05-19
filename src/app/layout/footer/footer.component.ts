import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn =isLoggedIn;
    });
  }

}

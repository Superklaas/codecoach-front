import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import {NavigationStart, Router} from "@angular/router";
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  username;
  isLoggedIn: boolean;
  role;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => {
      this.username = isLoggedIn ? this.authenticationService.getProfileName(): undefined ;
      this.role = isLoggedIn ? this.authenticationService.getRole() : undefined;
      this.isLoggedIn =isLoggedIn;
    });

    // The materialize sidenav doesn't play nice with Angular Router.
    // When a mobile user navigates to a link, the sidenav remains open.
    // To fix this, we subscribe to router navigation events and close
    // the sidenav if it exists.
    if ((window as any).M) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe((ev:NavigationStart) => {
          const sidenavEl = document.getElementById("nav-mobile");
          const sidenav = M.Sidenav.getInstance(sidenavEl);
          if (sidenav) sidenav.close();
        });
    }
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/home`);
  }
}

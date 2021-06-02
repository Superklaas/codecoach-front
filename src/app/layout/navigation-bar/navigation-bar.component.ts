import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {filter} from 'rxjs/operators';
import * as M from "materialize-css";

import {AuthenticationService} from 'src/app/authentication/authentication.service';
import { UserService } from 'src/app/utility/service/user.service';
import { InitService } from 'src/app/utility/service/materialize/init.service';
import { ProfileService } from 'src/app/utility/service/profile.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, AfterViewInit {
  private _username: string;
  private _isLoggedIn: boolean;
  private _role: string;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private initService: InitService,
    private profileService: ProfileService,
  ) {
  }

  ngOnInit(): void {

    this.profileService.currentUser$
      .subscribe(user => {
        if (user === null) {
          this._isLoggedIn = false;
          return;
        }
        this._isLoggedIn = true;
        this._username = user.profileName;
        this._role = user.role;
      });

    // The materialize sidenav doesn't play nice with Angular Router.
    // When a mobile user navigates to a link, the sidenav remains open.
    // To fix this, we subscribe to router navigation events and close
    // the sidenav if it exists.
    if ((window as any).M) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe((ev: NavigationStart) => {
          const sidenavEl = document.getElementById("nav-mobile");
          const sidenav = M.Sidenav.getInstance(sidenavEl);
          if (sidenav) sidenav.close();
        });
    }
  }

  ngAfterViewInit(): void {
    this.initService.initSidenav();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(`/home`);
  }

  get username(): string {
    return this._username;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get role(): string {
    return this._role;
  }
}

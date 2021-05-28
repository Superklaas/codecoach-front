import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/authentication/authentication.service';
import {NavigationStart, Router} from "@angular/router";
import {filter} from 'rxjs/operators';
import * as M from "materialize-css";
import {InitService} from "../../materialize/init.service";
import {ProfileService} from "../../service/profile.service";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, AfterViewInit {
  private _username: string;
  private _isLoggedIn: boolean;
  private _role: string;

  constructor(private authService: AuthenticationService, private userService: UserService, private router: Router, private initService: InitService) {
  }

  ngOnInit(): void {
    this.authService.userLoggedIn$
      .subscribe(isLoggedIn => {
          this._isLoggedIn = isLoggedIn;
          if (this._isLoggedIn) {
            this.userService.get(Number(this.authService.getId()))
              .subscribe(user => {
                this._username = user.profileName;
                this._role = user.role;
              })
          }
        }
      )

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

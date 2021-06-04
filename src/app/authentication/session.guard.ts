import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { AuthSession } from './AuthSession';

export function sessionGuard(cb: (s: AuthSession) => boolean, onRefused?: (router: Router) => void) {

  @Injectable({
    providedIn: 'root'
  })
  class SessionGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.session$
        .pipe(map(cb))
        .pipe(tap(allowed => {
          if (!allowed) {
            if (onRefused) {
              onRefused(this.router)
            } else {
              this.router.navigate(['/dashboard'])
            }
          }
        }));
    }
  }

  return SessionGuard;
}

export function authenticated(loggedin: boolean) {
  return sessionGuard(s => s.isLoggedIn() === loggedin, (router: Router) => router.navigate['/login']);
}

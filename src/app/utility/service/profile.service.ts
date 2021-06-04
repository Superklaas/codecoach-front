import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AuthSession } from 'src/app/authentication/AuthSession';
import { Session } from '../model/Session';
import {User} from '../model/User';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private currentUser = new ReplaySubject<User>(1);
  public readonly currentUser$ = this.currentUser.asObservable();

  constructor(private authService: AuthenticationService, private userService: UserService) {
    this.authService.session$.subscribe(session => this.setUserFromSession(session))
  }

  update(user: User) {
    this.currentUser.next(user);
  }

  refresh(): Promise<User> {
    const session = this.authService.getSession();

    if(!session.isLoggedIn()){
      this.currentUser.next(null);
      return Promise.resolve(null);
    }

    return this.userService.get(session.getUserId())
      .pipe(tap(user => this.currentUser.next(user)))
      .toPromise();
  }

  private setUserFromSession(session: AuthSession) {
    if(!session.isLoggedIn()){
      this.currentUser.next(null);
      return;
    }
    return this.userService.get(session.getUserId())
      .subscribe(user => this.currentUser.next(user));
  }
}

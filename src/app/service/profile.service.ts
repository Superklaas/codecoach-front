import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { tap } from 'rxjs/operators';
import {AuthenticationService} from '../authentication/authentication.service';
import {User} from '../model/User';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private currentUser = new ReplaySubject<User>();
  currentUser$ = this.currentUser.asObservable();

  constructor(private authService: AuthenticationService, private userService: UserService) {
    this.authService.userLoggedIn$.subscribe(isLoggedIn => {
      if(!isLoggedIn){
        this.currentUser.next(null);
        return;
      }
      return this.userService.get(Number(this.authService.getId()))
        .subscribe(user => this.currentUser.next(user));
    })
  }

  refresh(): Observable<User> {
    if (!this.authService.isLoggedIn) {
      this.currentUser.next(null);
      return this.currentUser$;
    }

    return this.userService.get(Number(this.authService.getId()))
      .pipe(tap(user => this.currentUser.next(user)));
  }
}

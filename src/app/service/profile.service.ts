import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../model/User';
import { UserService } from './user.service';

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
      this.userService.get(Number(this.authService.getId())).subscribe(user => this.currentUser.next(user));
    })
  }
}

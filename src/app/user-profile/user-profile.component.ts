import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  isLoggedIn: boolean;

  constructor(  private route: ActivatedRoute, private userService: UserService, private authenticationService: AuthenticationService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(id).subscribe(user => this.user = user);
    this.authenticationService.userLoggedIn$.subscribe(isLoggedIn => { 
      this.isLoggedIn =isLoggedIn;
    });
  }

}

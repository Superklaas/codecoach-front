import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

import { User } from 'src/app/utility/model/User';
import { ErrorService } from 'src/app/utility/service/error.service';
import { ProfileService } from 'src/app/utility/service/profile.service';



@Component({
  selector: 'app-edit-coaching-topics',
  templateUrl: './edit-coaching-topics.component.html',
  styleUrls: ['./edit-coaching-topics.component.css']
})
export class EditCoachingTopicsComponent implements OnInit {

  currentUser$: Observable<User> = this.profileService.currentUser$;

  constructor(private profileService: ProfileService, private router: Router, private errorService: ErrorService) { }

  ngOnInit(): void {

  }

  cancel() {
    this.router.navigateByUrl("/dashboard-coach/edit-coaching-topics");
  }

  save() {
    this.profileService.refresh()
    .subscribe(
      _ => {
        alert("Your changes have been saved.");
        this.router.navigateByUrl(`/dashboard-coach/edit-coaching-topics`);
      },
      e => this.errorService.throwError(e),
    );
  }
}

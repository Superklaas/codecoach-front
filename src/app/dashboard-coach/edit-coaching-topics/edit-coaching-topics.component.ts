import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../model/User";
import {ProfileService} from "../../service/profile.service";
import {Router} from "@angular/router";
import { ErrorService } from 'src/app/service/error.service';

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
    this.router.navigateByUrl(`/dashboard-coach/edit-coaching-topics`);
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

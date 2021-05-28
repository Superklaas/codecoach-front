import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Topic} from "../../model/Topic";
import {TopicService} from "../../service/topic.service";
import {AuthenticationService} from "../../authentication/authentication.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/User";
import {ProfileService} from "../../service/profile.service";
import {Router} from "@angular/router";
import { Location } from '@angular/common'
import { ErrorService } from 'src/app/service/error.service';
import { tap } from 'rxjs/operators';

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
    this.router.navigateByUrl(`/dashboard-coach`);
  }

  save() {
    this.profileService.refresh().subscribe(
      _ => this.router.navigateByUrl(`/dashboard-coach`),
      e => this.errorService.throwError(e),
    );
  }
}

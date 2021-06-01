import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {
  private _applyForm = this.formBuilder.group(
    {
      motivation: new FormControl("",[]),
      topic1: new FormControl("", []),
      topic2: new FormControl("", []),
    }
  )

  constructor(public profileService: ProfileService,
              private userService: UserService,
              private authService: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.userService.coachRequest(+this.authService.getId(), this._applyForm.value)
      .subscribe();
  }

  get applyForm(): FormGroup {
    return this._applyForm;
  }

}

import {Component, OnInit} from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-become-coach',
  templateUrl: './become-coach.component.html',
  styleUrls: ['./become-coach.component.css']
})
export class BecomeCoachComponent implements OnInit {
  private _hasApplied: boolean;
  private _applyForm = this.formBuilder.group(
    {
      motivation: new FormControl("",[Validators.required]),
      topic1: new FormControl("", []),
      topic2: new FormControl("", []),
    }, {validators: this.oneTopicRequired}
  )

  constructor(public profileService: ProfileService,
              private userService: UserService,
              private authService: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._hasApplied = false;
  }

  oneTopicRequired(group: FormGroup): {topicMissing: boolean} {
    const topic1 = group.get('topic1').value;
    const topic2 = group.get('topic2').value;
    return topic1 === "" && topic2 === "" ? {topicMissing: true} : null;
  }


  submit(): void {
    this.userService.coachRequest(this.authService.getSession().getUserId(), this._applyForm.value)
      .subscribe(() => this._hasApplied = true);
  }

  wrongInputHasBeenTyped(input: AbstractControl): boolean{
    if (input === null){
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }

  hasOneBeenTouched(...inputs: AbstractControl[]){
    return inputs.filter(input => input.touched || input.dirty).length > 0;
  }

  get applyForm(): FormGroup {
    return this._applyForm;
  }

  get hasApplied(): boolean {
    return this._hasApplied;
  }

  get motivation(): AbstractControl {
    return this._applyForm.get('motivation');
  }

  get topic1(): AbstractControl {
    return this._applyForm.get('topic1');
  }

  get topic2(): AbstractControl {
    return this._applyForm.get('topic2');
  }
}

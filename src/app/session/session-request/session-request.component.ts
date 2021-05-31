import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { tap } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/utility/model/User';
import { ErrorService } from 'src/app/utility/service/error.service';
import { SessionService } from 'src/app/utility/service/session.service';
import { UserService } from 'src/app/utility/service/user.service';



@Component({
  selector: 'app-session-request',
  templateUrl: './session-request.component.html',
  styleUrls: ['./session-request.component.css']
})
export class SessionRequestComponent implements OnInit {

  coach: User;

  public _requestSessionForm = this.formBuilder.group(
    {
      subject: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      date: new FormControl("", [Validators.required]),
      startTime: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      remarks: new FormControl("", [Validators.maxLength(255)]),
      coachId: new FormControl(this.route.snapshot.paramMap.get('id')),
      coacheeId: new FormControl(this.authenticationService.getId())
    }, {validators: this.timeInThePast});

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService, private router: Router,
              private route: ActivatedRoute, private authenticationService: AuthenticationService, private userService: UserService,
              private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getCoach();
  }

  private getCoach() {
    this.userService.get(+this.route.snapshot.paramMap.get('id'))
    .pipe(tap(user => {
      if (user.role !== 'COACH') {
        throw new Error("User " + user.profileName + " is not a coach")
      }
    }))
    .subscribe(
      user => this.coach = user,
      errorResponse => this.errorService.throwError(errorResponse.toString())
    );
  }

  timeInThePast(group: FormGroup): { inThePast?: boolean } {
    const date = group.get('date').value;
    const startTime = group.get('startTime').value;
    if (date === '' || startTime == '') return null;
    const referenceDate = Date.parse(date + " " + startTime);
    return referenceDate < Date.now() ? {inThePast: true} : {};
  }

  get requestSessionForm() {
    return this._requestSessionForm;
  }

  get subject() {
    return this._requestSessionForm.get('subject');
  }

  get date() {
    return this._requestSessionForm.get('date');
  }

  get startTime() {
    return this._requestSessionForm.get('startTime');
  }

  get location() {
    return this._requestSessionForm.get('location');
  }

  public wrongInputHasBeenTyped(input: AbstractControl): boolean {
    if (input === null) {
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }

  submit() {
    this._requestSessionForm.markAllAsTouched();
    if (this._requestSessionForm.valid) {
      return this.sessionService.create(this._requestSessionForm.value)
        .subscribe(
          () => this.router.navigate([`/user/${this.route.snapshot.paramMap.get('id')}`]),
          errorResponse => this.errorService.throwError(errorResponse.toString()));
    }
  }


}

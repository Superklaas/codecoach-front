import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../service/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-session-request',
  templateUrl: './session-request.component.html',
  styleUrls: ['./session-request.component.css']
})
export class SessionRequestComponent implements OnInit {

  public _requestSessionForm = this.formBuilder.group(
    {
      subject: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      startTime: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      remarks: new FormControl("", []),
      coachId: new FormControl(this.route.snapshot.paramMap.get('id'),),
      coacheeId: new FormControl(this.authenticationService.getId())
    }, {validators: this.timeInThePast});

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService, private router: Router,
              private route: ActivatedRoute, private authenticationService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit(): void {
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
          errorResponse => this.alertWrongCoachIdInUrl(errorResponse));
    }
  }

  private alertWrongCoachIdInUrl(errorResponse: any) {
    alert(errorResponse.error.message);
    this.router.navigate([`/user/${this.authenticationService.getId()}`]);
  }

}

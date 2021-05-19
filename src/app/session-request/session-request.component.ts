import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {SessionService} from "../service/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-session-request',
  templateUrl: './session-request.component.html',
  styleUrls: ['./session-request.component.css']
})
export class SessionRequestComponent implements OnInit {

  private _requestSessionForm = this.formBuilder.group(
    {
      subject: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      startTime: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      remarks: new FormControl("", []),
      coachId: new FormControl(this.route.snapshot.paramMap.get('id'),),
      coacheeId: new FormControl(this.authenticationService.getId())
    }
  )

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  get requestSessionForm() {
    return this._requestSessionForm;
  }

  submit() {
    this._requestSessionForm.markAllAsTouched();
    if (this._requestSessionForm.valid){
      return this.sessionService.create(this._requestSessionForm.value).subscribe(() => this.router.navigate([`/user/${this.route.snapshot.paramMap.get('id')}`]))
    }
      }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private _success;
  private _error;
  private _emailForm = this.formBuilder.group({
    email: ''
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this._success = false;
    this._error = false;
    this.userService.sendResetToken(this._emailForm.get("email").value, window.location.href.replace('/forgot-password', ''))
      .subscribe(
        (() => {
        this._success = true;
      }),
      (error => this.addErrorToForm(error))
  );
    this._emailForm.reset();
  }


  addErrorToForm(errorResponse) {
  if (errorResponse.error.status === 400) {
    this._emailForm.setErrors({serverError: errorResponse.error.message});
  }
  else {
    this._emailForm.setErrors({ serverError : 'Error: oops something went wrong...'});
  }
}

  get emailForm(): FormGroup {
    return this._emailForm;
  }

  get success() {
    return this._success;
  }

  get error() {
    return this._error;
  }
}

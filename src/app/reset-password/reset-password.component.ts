import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  private _success;
  private _error;
  private _resetToken;
  private _resetPasswordForm = this.formBuilder.group({
    newPassword: new FormControl("",
    [Validators.required, Validators.minLength(8),
    Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
    confirmNewPassword: new FormControl("", [Validators.required])
  }, { validators: this.matchingPassword });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  submit() {
    this._resetPasswordForm.markAllAsTouched();
    this._success = false;
    this._error = false;
    this.route.queryParams.subscribe(params => {
      this._resetToken = params.token;
      this.userService.resetPassword(this._resetToken, this._resetPasswordForm.get("newPassword").value)
        .subscribe(
          (() => {
            this._success = true;
            this.router.navigateByUrl('/login');
          }),
          (error => this.addErrorToForm(error))
        );

    });
    this._resetPasswordForm.reset();
  }


  addErrorToForm(errorResponse) {
    if (errorResponse.error.status === 400) {
      this._resetPasswordForm.setErrors({serverError: errorResponse.error.message});
    }
    else {
      this._resetPasswordForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
  }

  matchingPassword(group: FormGroup): { notSame: boolean }{
    const password = group.get('newPassword').value;
    const password2 = group.get('confirmNewPassword').value;
    return password === password2 ? null : { notSame: true }
  }

  wrongInputHasBeenTyped(input: AbstractControl): boolean{
    if (input === null){
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }

  hasAllBeenTouched(...inputs: AbstractControl[]){
    return inputs.reduce((touched, input) => touched && (input.touched || input.dirty), true);
  }


  get resetPasswordForm(): FormGroup {
    return this._resetPasswordForm;
  }

  get success() {
    return this._success;
  }

  get error() {
    return this._error;
  }

  get newPassword(){
    return this._resetPasswordForm.get('newPassword');
  }

  get confirmNewPassword(){
    return this._resetPasswordForm.get('confirmNewPassword')
  }

}

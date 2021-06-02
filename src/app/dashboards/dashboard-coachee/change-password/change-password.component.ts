import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../utility/service/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/authentication.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changePasswordForm = this.formBuilder.group({
    id: new FormControl(this.authSerive.getId(), []),
    oldPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
    newPassword2: new FormControl("", [Validators.required]),
  },{ validators: this.matchingPassword })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private authSerive: AuthenticationService,) { }

  ngOnInit(): void {
  }

  matchingPassword(group: FormGroup): { notSame: boolean }{
    const password = group.get('newPassword').value;
    const password2 = group.get('newPassword2').value;
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

  get oldPassword(){
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword(){
    return this.changePasswordForm.get('newPassword');
  }

  get newPassword2(){
    return this.changePasswordForm.get('newPassword2');
  }

  addErrorToForm(errorResponse) {
    if (errorResponse.error.status === 403) {
      this.changePasswordForm.setErrors({serverError: errorResponse.error.message});
    }
    else {
      this.changePasswordForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
  }

  submit() {
    this.changePasswordForm.markAllAsTouched();

      return this.userService.changePassword(this.changePasswordForm.value)
        .subscribe(() => { this.router.navigate([`/dashboard`])}
        , (errorResponse => this.addErrorToForm(errorResponse))  );
  }

  cancel() {
    this.router.navigateByUrl("/dashboard");
  }
}

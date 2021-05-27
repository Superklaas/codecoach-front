import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {InitService} from "../materialize/init.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: new FormControl("", [Validators.required, Validators.pattern(/.*@.*/)]),
    password: new FormControl("",
      [Validators.required, Validators.minLength(8),
        Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
  });;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private initService: InitService) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  onSubmit(loginData) {
    this.loginForm.markAllAsTouched();

    if (!this.loginForm.valid) {
      this.loginForm.setErrors({credentials: "wrong"});
      return
    }

    this.authenticationService.login(loginData)
      .subscribe(
        (_ => {
          this.router.navigateByUrl(`/dashboard`);
          this.initService.initDropdowns();
          this.loginForm.reset();
        }),
        (error => this.addErrorToForm(error))
      );
  }

  addErrorToForm(errorResponse) {
    if (errorResponse.error.status === 400) {
      this.loginForm.setErrors({serverError: errorResponse.error.message});
      this.loginForm.setErrors({credentials: "wrong"});
    }else{
      this.loginForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/home`);
  }

  requestResetPassword() {
    this.router.navigateByUrl(`/forgot-password`);
  }
}

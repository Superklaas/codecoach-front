import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error;
  success;
  loginForm;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  onSubmit(loginData) {
    this.success = false;
    this.error = false;
    this.authenticationService.login(loginData)
      .subscribe(
        (_ => {
          this.success = true;
          this.router.navigateByUrl(`/dashboard`);
        }),
        (error => this.addErrorToForm(error))
      );
    this.loginForm.reset();
  }

  addErrorToForm(errorResponse) {
    if (errorResponse.error.status === 400) {
      this.loginForm.setErrors({serverError: errorResponse.error.message});
    }else{
      this.loginForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/home`);
  }

  requestResetPassword() {
    alert("please email an admin.")
  }

}

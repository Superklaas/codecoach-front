import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../utility/service/user.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public changePasswordForm = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.pattern(/.*@.*/)]),
    oldPassword: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
    newPassword: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
    newPassword2: new FormControl("", [Validators.required]),
  },{  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.changePasswordForm.markAllAsTouched();
    if(this.changePasswordForm.valid){
      return this.userService.changePassword(this.changePasswordForm.value).subscribe(() => this.router.navigate([`/home`])/*, (errorResponse => this.addErrorToForm(errorResponse))*/  );
    }
  }
}

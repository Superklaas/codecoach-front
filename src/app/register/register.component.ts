import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _hasDuplicateEmail = false;
  private _registerForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    profileName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(/.*@.*/)]),
    password: new FormControl("",
      [Validators.required, Validators.minLength(8),
        Validators.pattern(/.*[0-9]+.*/), Validators.pattern(/.*[A-Z]+.*/), Validators.pattern(/.*[a-z]+.*/)]),
    password2: new FormControl("", [Validators.required, ]),
    role : "COACHEE"
  },{ validators: this.matchingPassword })
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

  matchingPassword(group: FormGroup): { notSame: boolean }{
    const password = group.get('password').value;
    const password2 = group.get('password2').value;
    return password === password2 ? null : { notSame: true }
  }

  get registerForm(): FormGroup{
    return this._registerForm;
  }

  get firstName() {
    return this._registerForm.get('firstName');
  }

  get lastName(){
    return this._registerForm.get('lastName');
  }

  get profileName(){
    return this._registerForm.get('profileName');
  }

  get email(){
    return this._registerForm.get('email');
  }

  get password(){
    return this._registerForm.get('password');
  }

  get password2(){
    return this._registerForm.get('password2')
  }

  get hasDuplicateEmail(){
    return this._hasDuplicateEmail;
  }

  submit() {
    this._registerForm.markAllAsTouched();
    if(this._registerForm.valid){
      return this.userService.create(this._registerForm.value).subscribe(user => this.router.navigate([`/user/${user.id}`]), (errorResponse => this.addErrorToForm(errorResponse))  );
    }
  }

  addErrorToForm(errorResponse){
    if (errorResponse.error.status === 400){
      this._registerForm.setErrors({ serverError : errorResponse.error.message});
    }else{
    this._registerForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
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
}

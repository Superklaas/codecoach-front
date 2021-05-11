import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _registerForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    profileName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
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


  submit() {
    return this.userService.create(this._registerForm.value).subscribe(user => this.router.navigate([`/user/${user.id}`]));
  }
}

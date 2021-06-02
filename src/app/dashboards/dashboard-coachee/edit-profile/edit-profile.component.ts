import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';
import {Router} from "@angular/router";
import {StringValidators} from "../../../utility/validators/StringValidators";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userImageUrl: string;
  private _editForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required, StringValidators.noWhitespace]),
    lastName: new FormControl("",[Validators.required, StringValidators.noWhitespace]),
    email: new FormControl("",[Validators.required, StringValidators.noWhitespace, Validators.pattern(/.*@.*/)]),
    profileName: new FormControl("",[Validators.required, StringValidators.noWhitespace]),
    imageUrl: new FormControl("",),
  });
  constructor(public profileService: ProfileService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    const id = this.authService.getId();
    this.userService.get(+id).subscribe(user => {
      this._editForm.patchValue(user);
      this.userImageUrl = user.imageUrl;
    });
  }

  get userImage() {
    if (!this.userImageUrl) {
      return "assets/images/default-person.png";
    }
    return this.userImageUrl;
  }

  get userImageString() {
    if (!this.userImageUrl) {
      return "Your avatar URL";
    }
    return this.userImageUrl;
  }

  get editForm() {
    return this._editForm;
  }
  get firstName(){
    return this._editForm.get('firstName');
  }
  get lastName(){
    return this._editForm.get('lastName');
  }
  get email(){
    return this._editForm.get('email');
  }
  get profileName(){
    return this._editForm.get('profileName');
  }

  update() {
    if(this._editForm.valid){
      this.userService.update(this._editForm.value, +this.authService.getId()).subscribe(
        (_ => {
          alert("Your changes have been saved.");
          this.router.navigateByUrl("/dashboard");
        }),
        (error =>  this._editForm.setErrors({serverError: error.error.message}))
      );
    }
  }

  cancel() {
    this.userService.get(+this.authService.getId()).subscribe(user => {
      this._editForm.patchValue(user);
      this.userImageUrl = user.imageUrl;
      this.router.navigateByUrl("/dashboard");
    });
  }

  wrongInputHasBeenTyped(input: AbstractControl): boolean{
    if (input === null){
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }



}

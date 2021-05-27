import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ProfileService } from 'src/app/service/profile.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userImageUrl: string;
  private _editForm = this.formBuilder.group({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required, Validators.pattern(/.*@.*/)]),
    profileName: new FormControl("",[Validators.required]),
    imageUrl: new FormControl("",),
  });
  constructor(public profileService: ProfileService, private formBuilder: FormBuilder, private userService: UserService, private authService: AuthenticationService) { }



  ngOnInit(): void {
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
    this.userService.update(this._editForm.value, +this.authService.getId()).subscribe(
      (_ => {
        alert("Your changes have been saved");
        window.location.reload();
      }),
      (error =>  this._editForm.setErrors({serverError: error.error.message}))
    );
  }

  cancel() {
    this.userService.get(+this.authService.getId()).subscribe(user => {
      this._editForm.patchValue(user);
      this.userImageUrl = user.imageUrl;
    });
  }

  wrongInputHasBeenTyped(input: AbstractControl): boolean{
    if (input === null){
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }

}

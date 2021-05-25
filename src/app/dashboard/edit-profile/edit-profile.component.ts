import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/model/User';
import { ProfileService } from 'src/app/service/profile.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  private _editForm = this.formBuilder.group({
    firstName: new FormControl("",),
    lastName: new FormControl("",),
    email: new FormControl("",),
    profileName: new FormControl("",),
    imageUrl: new FormControl("",),
  });
  constructor(public profileService: ProfileService, private formBuilder: FormBuilder, private userService: UserService, private authService: AuthenticationService) { }
  userImageUrl: string;
  
 
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

  get userImageString(){
    if (!this.userImageUrl) {
      return "Your avatar URL";
    }
    return this.userImageUrl;
  }

  get editForm(){
    return this._editForm;
  }

  update(){
    this.userService.update(this._editForm.value, +this.authService.getId()).subscribe();
  }
  cancel(){
    this.userService.get(+this.authService.getId()).subscribe(user => {
      this._editForm.patchValue(user);
      this.userImageUrl = user.imageUrl;
    });
  }
  
}

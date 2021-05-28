import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InitService } from 'src/app/materialize/init.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, AfterViewInit {

  id: number;
  _userImage: string;
   roles = ['COACH','COACHEE','ADMIN']

  private _editForm = this.formBuilder.group({
    firstName: new FormControl("",),
    lastName: new FormControl("",),
    email: new FormControl("",),
    profileName: new FormControl("",),
    imageUrl: new FormControl("",),
    role: new FormControl("",),
  });

  private _editCoachForm = this.formBuilder.group({
    availability: new FormControl("",),
    introduction: new FormControl("",),
  });


  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder , private initService: InitService) { }

  ngAfterViewInit(): void {
    this.initService.initFormSelect();
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(this.id).subscribe(user => {
      this._editForm.patchValue(user);
      this._editCoachForm.patchValue(user);
      this.initService.initFormSelect();
      this._userImage = user.imageUrl;
    });
  }

  updateProfile() {
    this.userService.update(this._editForm.value, +this.id).subscribe(
      (_ => {
        alert("Your changes have been saved");
        window.location.reload();
      }),
      (error =>  this._editForm.setErrors({serverError: error.error.message}))
    );
  }

  cancelProfile(){
    this.userService.get(this.id).subscribe(user => {
      this._editForm.patchValue(user);
    });
  }

  updateCoach() {
    this.userService.updateCoach(this._editCoachForm.value, +this.id).subscribe(
      (_ => {
        alert("Your changes have been saved");
        window.location.reload();
      }),
      (error =>  this._editCoachForm.setErrors({serverError: 'oops something went wrong'}))
    );
  }

  cancelCoach(){
    this.userService.get(this.id).subscribe(user => {
      this._editCoachForm.patchValue(user);
    });
  }


  get userImage() {
    if (!this._userImage) {
      return "assets/images/default-person.png";
    }
    return this._userImage;
  }

  get editForm(){
    return this._editForm;
  }

  get editCoachForm(){
    return this._editCoachForm;
  }

}

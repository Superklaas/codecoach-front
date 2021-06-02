import { AfterViewInit, Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import { User } from 'src/app/utility/model/User';
import { InitService } from 'src/app/utility/service/materialize/init.service';
import { RolePersonalisationService } from 'src/app/utility/service/role-personalisation.service';
import { UserService } from 'src/app/utility/service/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, AfterViewInit {

  id: number;
  _userImage: string;
   roles = ['COACH','COACHEE','ADMIN'];
   areTopicsBeingEdited;

   user: User;

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
    xp: new FormControl("",),
  });


  private _changePasswordForm = this.formBuilder.group(
    {
      id: new FormControl(Number(this.route.snapshot.paramMap.get('id')), []),
      newPassword: new FormControl(""),
      confirmPassword: new FormControl("")
    }, { validators: this.matchingPassword }
  )

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder ,
              private initService: InitService,
              private roleStuff: RolePersonalisationService,
              private router: Router) { }

  ngAfterViewInit(): void {
    this.initService.initFormSelect();
  }

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(this.id).subscribe(user => {
      this.user = user;
      this._editForm.patchValue(user);
      this._editCoachForm.patchValue(user);
      this.initService.initFormSelect();
      this._userImage = user.imageUrl;
      this.areTopicsBeingEdited = false;
    });
  }

  edit():void {
    this.areTopicsBeingEdited = true;
  }

  updateProfile() {
    this.userService.update(this._editForm.value, +this.id).subscribe(
      (_ => {
        this.displayUser();
        this.areTopicsBeingEdited = false;
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

  get color() {
    return this.roleStuff.color;
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

  get changePasswordForm(){
    return this._changePasswordForm;
  }

  get newPassword(){
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword(){
    return this.changePasswordForm.get('confirmPassword');
  }

  changePassword() {
    return this.userService.changePassword(this.changePasswordForm.value)
      .subscribe(() => window.location.reload()
        , (errorResponse => this.addErrorToForm(errorResponse)) );
  }

  matchingPassword(group: FormGroup): { notSame: boolean }{
    const password = group.get('newPassword').value;
    const password2 = group.get('confirmPassword').value;
    return password === password2 ? null : { notSame: true }
  }

  addErrorToForm(errorResponse) {
    console.log(errorResponse.error.status, errorResponse.error.message)

    if (errorResponse.error.status === 400) {
      this.changePasswordForm.setErrors({serverError: errorResponse.error.message});
    }
    else {
      this.changePasswordForm.setErrors({ serverError : 'Error: oops something went wrong...'});
    }
  }

  hasAllBeenTouched(...inputs: AbstractControl[]){
    return inputs.reduce((touched, input) => touched && (input.touched || input.dirty), true);
  }

  cancelPassword() {
    this._changePasswordForm.reset();
  }
}

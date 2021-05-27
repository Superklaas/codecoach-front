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
  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder , private initService: InitService) { }

  ngAfterViewInit(): void {
    this.initService.initFormSelect();
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.get(this.id).subscribe(user => {
      console.log(user);
      this._editForm.patchValue(user);
      this.initService.initFormSelect();
      this._userImage = user.imageUrl;
    }); 
  }

  update() {
    this.userService.update(this._editForm.value, +this.id).subscribe(
      (_ => {
        alert("Your changes have been saved");
        this.ngOnInit();
      }),
      (error =>  this._editForm.setErrors({serverError: error.error.message}))
    );
  }

  cancel(){
    this.userService.get(this.id).subscribe(user => {
      this._editForm.patchValue(user);
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

}

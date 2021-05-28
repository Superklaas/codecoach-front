import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-coach',
  templateUrl: './edit-coach.component.html',
  styleUrls: ['./edit-coach.component.css']
})
export class EditCoachComponent implements OnInit {

  id: number;

  private _editCoachForm = this.formBuilder.group({
    availability: new FormControl("",[Validators.required]),
    introduction: new FormControl("",[Validators.required]),
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private authService: AuthenticationService ) { }

  ngOnInit(): void {
    this.id = +this.authService.getId();
    this.userService.get(this.id).subscribe(user => {
      this._editCoachForm.patchValue(user);
    });
  }

  update() {
    this.userService.updateCoach(this._editCoachForm.value, +this.id).subscribe(
      (_ => {
        alert("Your changes have been saved");
        window.location.reload();
      }),
      (error =>  this._editCoachForm.setErrors({serverError: 'oops something went wrong'}))
    );
  }

  cancel(){
    this.userService.get(this.id).subscribe(user => {
      this._editCoachForm.patchValue(user);
    });
  }

  get editCoachForm(){
    return this._editCoachForm;
  }

  get availability(){
    return this._editCoachForm.get('availability');
  }

  get introduction(){
    return this._editCoachForm.get('introduction');
  }

  wrongInputHasBeenTyped(input: AbstractControl): boolean{
    if (input === null){
      return false;
    }
    return input.invalid && (input.dirty || input.touched);
  }

}

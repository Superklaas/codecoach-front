import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-coaching-topics',
  templateUrl: './edit-coaching-topics.component.html',
  styleUrls: ['./edit-coaching-topics.component.css']
})
export class EditCoachingTopicsComponent implements OnInit {

  private _editForm = this.formBuilder.group({
    topic1: new FormControl("",),
    topic2: new FormControl("",)
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get editForm() {
    return this._editForm;
  }

  update() {

  }

  cancel() {

  }
}

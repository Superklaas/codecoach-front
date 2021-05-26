import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-coach-feedback-form',
  templateUrl: './coach-feedback-form.component.html',
  styleUrls: ['./coach-feedback-form.component.css']
})
export class CoachFeedbackFormComponent implements OnInit {

  public _coachFeedbackForm = this.formBuilder.group(
    {
      preparedness: new FormControl(0,[Validators.required]),
      willingness: new FormControl(0, [Validators.required]),
      positive: new FormControl("", []),
      negative: new FormControl("", []),
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {

  }
}

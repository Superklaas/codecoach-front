import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import {Session} from "../../model/Session";
import {Router} from "@angular/router";


@Component({
  selector: 'app-coach-feedback-form',
  templateUrl: './coach-feedback-form.component.html',
  styleUrls: ['./coach-feedback-form.component.css']
})
export class CoachFeedbackFormComponent implements OnInit {
  @Input()
  private session: Session
  @Output()
  public submitted = new EventEmitter<string>()

  public _coachFeedbackForm = this.formBuilder.group(
    {
      preparedness: new FormControl(null,[Validators.required]),
      willingness: new FormControl(null, [Validators.required]),
      positive: new FormControl("", []),
      negative: new FormControl("", []),
    }
  )

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  get preparedness() {
    return this._coachFeedbackForm.get('preparedness');
  }

  get willingness() {
    return this._coachFeedbackForm.get('willingness');
  }


  updatePreparedness(formName: string, rating: number){
    this._coachFeedbackForm.get(formName).setValue(rating);
  }

  submit() {
    this._coachFeedbackForm.markAllAsTouched();
  this.sessionService.updateCoachFeedback(this.session.id, this._coachFeedbackForm.value as any).subscribe(() => this.submitted.emit());
  }
}

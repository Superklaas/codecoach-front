import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Session} from "../../model/Session";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";

@Component({
  selector: 'app-coachee-feedback-form',
  templateUrl: './coachee-feedback-form.component.html',
  styleUrls: ['./coachee-feedback-form.component.css']
})
export class CoacheeFeedbackFormComponent implements OnInit {

  @Input()
  private session: Session
  @Output()
  public submitted = new EventEmitter<Session>()

  public _coachFeedbackForm = this.formBuilder.group(
    {
      explanation: new FormControl(null,[Validators.required]),
      usefulness: new FormControl(null, [Validators.required]),
      positive: new FormControl("", []),
      negative: new FormControl("", []),
    }
  )

  constructor(private formBuilder: FormBuilder, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  get explanation() {
    return this._coachFeedbackForm.get('explanation');
  }

  get usefulness() {
    return this._coachFeedbackForm.get('usefulness');
  }

  updateSmileyRating(formName: string, rating: number){
    this._coachFeedbackForm.get(formName).setValue(rating);
  }

  submit() {
    this._coachFeedbackForm.markAllAsTouched();
    this.sessionService.updateCoacheeFeedback(this.session.id, this._coachFeedbackForm.value as any).subscribe(session => this.submitted.emit(session));
  }

}

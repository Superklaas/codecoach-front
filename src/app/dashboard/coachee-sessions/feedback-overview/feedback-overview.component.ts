import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../../model/Session";
import {FeedbackPopup} from "../feedbackPopup";

@Component({
  selector: 'app-feedback-overview',
  templateUrl: './feedback-overview.component.html',
  styleUrls: ['./feedback-overview.component.css']
})
export class FeedbackOverviewComponent implements OnInit {
  @Input()
  session: Session
  @Input()
  isCoach: boolean;

  feedbackPopup: FeedbackPopup = FeedbackPopup.CLOSED;

  constructor() { }

  ngOnInit(): void {
  }

  getFeedback() {
    if (this.isCoach){
      this.feedbackPopup = FeedbackPopup.FEEDBACK_TO_COACHEE;
    }else{
      this.feedbackPopup = FeedbackPopup.FEEDBACK_TO_COACH;
    }
  }

  isFeedbackClosed() {
    return this.feedbackPopup == FeedbackPopup.CLOSED;
  }
}

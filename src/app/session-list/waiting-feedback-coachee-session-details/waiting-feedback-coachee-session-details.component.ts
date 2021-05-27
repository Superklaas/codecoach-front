import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../model/Session";
import {FeedbackForCoachee} from "../../model/FeedbackForCoachee";

@Component({
  selector: 'app-waiting-feedback-coachee-session-details',
  templateUrl: './waiting-feedback-coachee-session-details.component.html',
  styleUrls: ['./waiting-feedback-coachee-session-details.component.css']
})
export class WaitingFeedbackCoacheeSessionDetailsComponent implements OnInit {

  feedBackViewStatus: 'open' | 'closed' | 'given' = 'closed';
  @Input()
  session: Session

  constructor() { }

  ngOnInit(): void {
    if (this.session.feedbackForCoach){
      this.feedBackViewStatus = 'given';
    }
  }

  toggleFeedbackView() {
    if (this.feedBackViewStatus === 'open'){
      this.feedBackViewStatus = 'closed';
    }else{
      this.feedBackViewStatus = 'open';
    }
  }

  feedBackSubmitted(session: Session) {
    this.feedBackViewStatus = 'given';
    if (session.status==='FEEDBACK_RECEIVED'){
      window.location.reload();
    }
  }

  coachHasAlreadyGivenFeedback() {
    let value = this.session.feedbackForCoachee as FeedbackForCoachee
    return value.preparedness > 0;
  }
}

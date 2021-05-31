import {Component, Input, OnInit} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';

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
    if (this.session.feedbackForCoach && this.session.feedbackForCoach.explanation !== null){
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
    return this.session.feedbackForCoachee !== null;
  }
}

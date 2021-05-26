import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../model/Session";

@Component({
  selector: 'app-waiting-feedback-coach-session-details',
  templateUrl: './waiting-feedback-coach-session-details.component.html',
  styleUrls: ['./waiting-feedback-coach-session-details.component.css']
})
export class WaitingFeedbackCoachSessionDetailsComponent implements OnInit {

  feedBackViewStatus: 'open' | 'closed' | 'given' = 'closed';
  @Input()
  session: Session

  constructor() { }

  ngOnInit(): void {
    if (this.session.feedbackForCoachee){
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
}

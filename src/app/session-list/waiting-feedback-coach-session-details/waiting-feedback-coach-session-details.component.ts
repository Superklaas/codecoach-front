import {Component, Input, OnInit} from '@angular/core';
import {Session} from "../../model/Session";

@Component({
  selector: 'app-waiting-feedback-coach-session-details',
  templateUrl: './waiting-feedback-coach-session-details.component.html',
  styleUrls: ['./waiting-feedback-coach-session-details.component.css']
})
export class WaitingFeedbackCoachSessionDetailsComponent implements OnInit {

  feedBackViewStatus: 'open' | 'closed' = 'open';
  @Input()
  session: Session

  constructor() { }

  ngOnInit(): void {
  }

  toggleFeedbackView() {
      if (this.feedBackViewStatus === 'open'){
        this.feedBackViewStatus = 'closed';
      }else{
        this.feedBackViewStatus = 'open';
      }
  }

  submit() {

  }
}

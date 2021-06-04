import {Component, Input, OnInit} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';

@Component({
  selector: 'app-feedback-received-details',
  templateUrl: './feedback-received-details.component.html',
  styleUrls: ['./feedback-received-details.component.css']
})
export class FeedbackReceivedDetailsComponent implements OnInit {

  @Input()
  public session: Session

  @Input()
  public perspective: 'coach' | 'coachee';

  feedBackViewStatus: 'open' | 'closed' = 'closed';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFeedbackView() {
    if (this.feedBackViewStatus === 'open'){
      this.feedBackViewStatus = 'closed';
    }else {
      this.feedBackViewStatus = 'open';
    }
  }
}

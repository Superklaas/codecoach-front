import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/Session';

@Component({
  selector: 'app-common-session-details',
  templateUrl: './common-session-details.component.html',
  styleUrls: ['./common-session-details.component.css']
})
export class CommonSessionDetailsComponent implements OnInit {

  @Input()
  session: Session

  @Input()
  perspective: 'coachee' | 'coach';

  hasError = false;

  constructor() { }

  ngOnInit(): void {
    this.hasError = this.shouldShowInErrorStyle();
  }

  isWaitingFeedbackAndOtherPersonGaveFeedback(): boolean {
    if (this.perspective === 'coach'){
      return true;
    }
  }

  shouldShowInErrorStyle(){
   /* if (this.session.status === 'WAITING_FEEDBACK'){
      if (this.perspective === 'coach' && !this.session.feedbackForCoach && this.session.feedbackForCoachee){
        return true;
      }
      if (this.perspective === 'coachee' && !this.session.feedbackForCoachee && this.session.feedbackForCoach){
        return true;
      }
    }*/
    return false;
  }

}

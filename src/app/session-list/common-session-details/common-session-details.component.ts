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
    if (this.session.status === 'WAITING_FEEDBACK'){
      console.log('feedback for coach', this.session.feedbackForCoach, 'feedback for coachee', this.session.feedbackForCoach);
      if (this.perspective === 'coach' && this.session.feedbackForCoach !== null && !this.session.feedbackForCoachee){
        return true;
      }
      if (this.perspective === 'coachee' && this.session.feedbackForCoachee !== null && !this.session.feedbackForCoach){
        return true;
      }
    }
    return false;
  }

}

import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';

@Component({
  selector: 'app-waiting-feedback-coach-session-details',
  templateUrl: './waiting-feedback-coach-session-details.component.html',
  styleUrls: ['./waiting-feedback-coach-session-details.component.css']
})
export class WaitingFeedbackCoachSessionDetailsComponent implements OnInit {

  feedBackViewStatus: 'open' | 'closed' | 'given' = 'closed';
  @Input()
  session: Session


  @Output()
  sessionUpdate = new EventEmitter<Session>();

  currentWindowWidth: number= window.innerWidth;


  constructor() { }

  ngOnInit(): void {
    if (this.session.feedbackForCoachee && this.session.feedbackForCoachee.preparedness !== null){
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

  coacheeHasAlreadyGivenFeedback(): boolean{
    return this.session.feedbackForCoach !== null;
  }

  feedBackSubmitted(session: Session) {
    this.feedBackViewStatus = 'given';
    if (session.status==='FEEDBACK_RECEIVED'){
      this.sessionUpdate.emit(session);
    }
  }

  isMobile(): boolean {
    return this.currentWindowWidth <= 1230;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }
}

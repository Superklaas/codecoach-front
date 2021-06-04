import {Component, HostListener, Input, OnInit} from '@angular/core';

import { Session } from 'src/app/utility/model/Session';

@Component({
  selector: 'app-feedback-received-details',
  templateUrl: './feedback-received-details.component.html',
  styleUrls: ['./feedback-received-details.component.css']
})
export class FeedbackReceivedDetailsComponent implements OnInit {

  @Input()
  public session: Session
  currentWindowWidth: number;

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

  isMobile(): boolean {
    return this.currentWindowWidth <= 1230;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }
}

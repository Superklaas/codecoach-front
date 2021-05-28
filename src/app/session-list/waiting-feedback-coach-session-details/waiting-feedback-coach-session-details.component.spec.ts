import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Session } from 'src/app/model/Session';

import { WaitingFeedbackCoachSessionDetailsComponent } from './waiting-feedback-coach-session-details.component';

describe('WaitingFeedbackCoachSessionDetailsComponent', () => {
  let component: WaitingFeedbackCoachSessionDetailsComponent;
  let fixture: ComponentFixture<WaitingFeedbackCoachSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingFeedbackCoachSessionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingFeedbackCoachSessionDetailsComponent);
    component = fixture.componentInstance;
    component.session = {} as Session;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

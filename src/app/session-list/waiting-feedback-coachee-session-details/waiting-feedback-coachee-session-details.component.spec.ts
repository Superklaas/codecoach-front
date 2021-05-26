import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingFeedbackCoacheeSessionDetailsComponent } from './waiting-feedback-coachee-session-details.component';

describe('WaitingFeedbackCoacheeSessionDetailsComponent', () => {
  let component: WaitingFeedbackCoacheeSessionDetailsComponent;
  let fixture: ComponentFixture<WaitingFeedbackCoacheeSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingFeedbackCoacheeSessionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingFeedbackCoacheeSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

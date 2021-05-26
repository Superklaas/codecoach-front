import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachFeedbackFormComponent } from './coach-feedback-form.component';

describe('CoachFeedbackFormComponent', () => {
  let component: CoachFeedbackFormComponent;
  let fixture: ComponentFixture<CoachFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachFeedbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReceivedDetailsComponent } from './feedback-received-details.component';

describe('FeedbackReceivedDetailsComponent', () => {
  let component: FeedbackReceivedDetailsComponent;
  let fixture: ComponentFixture<FeedbackReceivedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackReceivedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackReceivedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

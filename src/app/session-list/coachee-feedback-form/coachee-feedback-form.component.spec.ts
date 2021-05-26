import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeFeedbackFormComponent } from './coachee-feedback-form.component';

describe('CoacheeFeedbackFormComponent', () => {
  let component: CoacheeFeedbackFormComponent;
  let fixture: ComponentFixture<CoacheeFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeFeedbackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeSessionsComponent } from './coachee-sessions.component';

describe('CoacheeSessionsComponent', () => {
  let component: CoacheeSessionsComponent;
  let fixture: ComponentFixture<CoacheeSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

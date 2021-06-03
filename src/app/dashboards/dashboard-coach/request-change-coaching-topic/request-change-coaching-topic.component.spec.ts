import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChangeCoachingTopicComponent } from './request-change-coaching-topic.component';

describe('RequestChangeCoachingTopicComponent', () => {
  let component: RequestChangeCoachingTopicComponent;
  let fixture: ComponentFixture<RequestChangeCoachingTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeCoachingTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestChangeCoachingTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

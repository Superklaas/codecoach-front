import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RequestChangeCoachingTopicComponent } from './request-change-coaching-topic.component';

describe('RequestChangeCoachingTopicComponent', () => {
  let component: RequestChangeCoachingTopicComponent;
  let fixture: ComponentFixture<RequestChangeCoachingTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChangeCoachingTopicComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, ],
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

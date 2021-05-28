import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/User';
import { TopicService } from 'src/app/service/topic.service';
import { UserService } from 'src/app/service/user.service';

import { CoachingTopicsEditorComponent } from './coaching-topics-editor.component';

describe('CoachingTopicsEditorComponent', () => {
  let component: CoachingTopicsEditorComponent;
  let fixture: ComponentFixture<CoachingTopicsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingTopicsEditorComponent ],
      providers: [
        { provide: UserService, useValue: {}},
        { provide: TopicService, useValue: {
          getAllTopics() { return new Subject() }
        }}
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingTopicsEditorComponent);
    component = fixture.componentInstance;
    component.user = ({ topicList: [] } as User);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

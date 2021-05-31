import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditCoachTopicsByAdminComponent } from './edit-coach-topics-by-admin.component';

describe('EditCoachTopicsByAdminComponent', () => {
  let component: EditCoachTopicsByAdminComponent;
  let fixture: ComponentFixture<EditCoachTopicsByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoachTopicsByAdminComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoachTopicsByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingTopicsEditorComponent } from './coaching-topics-editor.component';

describe('CoachingTopicsEditorComponent', () => {
  let component: CoachingTopicsEditorComponent;
  let fixture: ComponentFixture<CoachingTopicsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingTopicsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingTopicsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

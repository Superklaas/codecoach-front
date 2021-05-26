import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileySelectorComponent } from './smiley-selector.component';

describe('SmileySelectorComponent', () => {
  let component: SmileySelectorComponent;
  let fixture: ComponentFixture<SmileySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

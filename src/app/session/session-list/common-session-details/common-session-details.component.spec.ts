import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUnderscorePipe } from 'src/app/utility/pipe/remove-underscore.pipe';
import { CommonSessionDetailsComponent } from './common-session-details.component';


describe('CommonSessionDetailsComponent', () => {
  let component: CommonSessionDetailsComponent;
  let fixture: ComponentFixture<CommonSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSessionDetailsComponent, RemoveUnderscorePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSessionDetailsComponent);
    component = fixture.componentInstance;
    (component as any).session = {status: ''};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

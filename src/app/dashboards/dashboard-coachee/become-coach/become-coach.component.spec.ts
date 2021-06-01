import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeCoachComponent } from './become-coach.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';

describe('BecomeCoachComponent', () => {
  let component: BecomeCoachComponent;
  let fixture: ComponentFixture<BecomeCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        RouterTestingModule, ],
      declarations: [ BecomeCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

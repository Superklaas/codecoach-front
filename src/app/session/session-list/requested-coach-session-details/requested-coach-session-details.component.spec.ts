import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionService } from 'src/app/utility/service/session.service';
import { RequestedCoachSessionDetailsComponent } from './requested-coach-session-details.component';

describe('RequestedCoachSessionDetailsComponent', () => {
  let component: RequestedCoachSessionDetailsComponent;
  let fixture: ComponentFixture<RequestedCoachSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedCoachSessionDetailsComponent ],
      providers: [
        {
          provide: SessionService,
          useValue: {},
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedCoachSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

import { CoacheeSessionsComponent } from './coachee-sessions.component';

describe('CoacheeSessionsComponent', () => {
  let component: CoacheeSessionsComponent;
  let fixture: ComponentFixture<CoacheeSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeSessionsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: AuthenticationService, useValue: {getId(){ return 1 }}}]
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

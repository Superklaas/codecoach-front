import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

import { MyCoachProfileComponent } from './my-coach-profile.component';

describe('MyCoachProfileComponent', () => {
  let component: MyCoachProfileComponent;
  let fixture: ComponentFixture<MyCoachProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoachProfileComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {getId() { return 1 }}
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoachProfileComponent);
    component = fixture.componentInstance;
    component.user = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

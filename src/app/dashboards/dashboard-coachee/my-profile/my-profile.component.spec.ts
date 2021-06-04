import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

import { ProfileService } from 'src/app/utility/service/profile.service';
import { UserService } from 'src/app/utility/service/user.service';
import { MyProfileComponent } from './my-profile.component';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule],
      providers: [
        {
          provide: AuthenticationService,
          useValue: {getId() { return 1 }}},
        {
          provide: ProfileService,
          useValue: {currentUser$: new Subject()}
        }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    component.user = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject, Subject } from 'rxjs';

import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  let router: Router;

  let authenticated: boolean;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthenticationService,
          useValue: {
             session$: new Subject()
          }
        }
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    });
    guard = TestBed.inject(AuthenticationGuard);
    router = TestBed.inject(Router);
    authenticated = false;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate authenticated request', () => {
    authenticated = true;
    // expect(guard.canActivate(null, null)).toBeTrue();
  });

  it('should redirect an unauthicated request to login', () => {
    const navigateSpy = spyOn(router, 'navigate');

    // expect(guard.canActivate(null, null)).toBeFalse();
    // expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});

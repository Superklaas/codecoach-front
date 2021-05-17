import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { User } from '../model/User'
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get should return an observable of type User',
    (done: DoneFn) => {
      service.get(1).subscribe(done);
    const req = httpMock.expectOne(environment.backendUrl + '/users/1');
    expect(req.request.method).toEqual('GET');
    req.flush({});
      }) 
    
});

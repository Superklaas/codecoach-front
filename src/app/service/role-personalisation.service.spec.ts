import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RolePersonalisationService } from './role-personalisation.service';

describe('RolePersonalisationService', () => {
  let service: RolePersonalisationService;
  //let router=RouterTes
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule, RouterTestingModule],
    });
    service = TestBed.inject(RolePersonalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

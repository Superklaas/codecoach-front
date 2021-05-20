import { TestBed } from '@angular/core/testing';

import { RolePersonalisationService } from './role-personalisation.service';

describe('RolePersonalisationService', () => {
  let service: RolePersonalisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolePersonalisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthenticationHttpService } from './authentication.http.service';

describe('Authentication Http Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: AuthenticationHttpService = TestBed.get(AuthenticationHttpService);
    expect(service).toBeTruthy();
  });
});

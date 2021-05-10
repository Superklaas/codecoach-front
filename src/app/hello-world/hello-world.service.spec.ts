import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: HelloWorldService = TestBed.inject(HelloWorldService);
    expect(service).toBeTruthy();
  });
});

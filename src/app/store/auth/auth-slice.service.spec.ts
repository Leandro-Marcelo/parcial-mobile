import { TestBed } from '@angular/core/testing';

import { AuthSliceService } from './auth-slice.service';

describe('AuthSliceService', () => {
  let service: AuthSliceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSliceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

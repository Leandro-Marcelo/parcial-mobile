import { TestBed } from '@angular/core/testing';

import { RideSliceService } from './ride-slice.service';

describe('RideSliceService', () => {
  let service: RideSliceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RideSliceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

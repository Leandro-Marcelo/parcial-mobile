import { TestBed } from '@angular/core/testing';

import { AppSliceService } from './app-slice.service';

describe('AppSliceService', () => {
  let service: AppSliceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSliceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

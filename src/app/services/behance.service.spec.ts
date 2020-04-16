import { TestBed } from '@angular/core/testing';

import { BehanceService } from './behance.service';

describe('BehanceService', () => {
  let service: BehanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

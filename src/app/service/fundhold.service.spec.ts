import { TestBed } from '@angular/core/testing';

import { StockholdService } from './stockhold.service';
import { FundholdService } from './fundhold.service';

describe('FundholdService', () => {
  let service: FundholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

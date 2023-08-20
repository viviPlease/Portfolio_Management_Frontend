import { TestBed } from '@angular/core/testing';

import { StockholdService } from './stockhold.service';

describe('StockholdService', () => {
  let service: StockholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

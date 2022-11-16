import { TestBed } from '@angular/core/testing';

import { PlatformStrategyService } from './platform.strategy.service';

describe('PlatformStrategyService', () => {
  let service: PlatformStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrategyService } from './custom-preload-strategy.service';

describe('CustomPreloadStrategyService', () => {
  let service: CustomPreloadStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

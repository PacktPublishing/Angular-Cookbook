import { TestBed } from '@angular/core/testing';

import { EmployeeBucketService } from './employee-bucket.service';

describe('EmployeeBucketService', () => {
  let service: EmployeeBucketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBucketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

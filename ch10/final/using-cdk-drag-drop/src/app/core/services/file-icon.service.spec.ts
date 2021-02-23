import { TestBed } from '@angular/core/testing';

import { FileIconService } from './file-icon.service';

describe('FileIconService', () => {
  let service: FileIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

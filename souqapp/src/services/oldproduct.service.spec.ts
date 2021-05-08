import { TestBed } from '@angular/core/testing';

import { OldProductService } from './oldproduct.service';

describe('ProductService', () => {
  let service: OldProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

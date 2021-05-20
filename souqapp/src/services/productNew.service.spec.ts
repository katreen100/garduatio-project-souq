/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductNewService } from './productNew.service';

describe('Service: ProductNew', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductNewService]
    });
  });

  it('should ...', inject([ProductNewService], (service: ProductNewService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { InsurancepayService } from './insurancepay.service';

describe('InsurancepayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsurancepayService = TestBed.get(InsurancepayService);
    expect(service).toBeTruthy();
  });
});

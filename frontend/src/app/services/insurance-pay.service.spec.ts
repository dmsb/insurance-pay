import { TestBed } from '@angular/core/testing';

import { InsurancepayService } from './insurance-pay.service';

describe('InsurancepayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsurancepayService = TestBed.get(InsurancepayService);
    expect(service).toBeTruthy();
  });
});

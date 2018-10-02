import { InsurancePayModule } from './insurance-pay.module';

describe('InsurancepayModule', () => {
  let insurancepayModule: InsurancePayModule;

  beforeEach(() => {
    insurancepayModule = new InsurancePayModule();
  });

  it('should create an instance', () => {
    expect(insurancepayModule).toBeTruthy();
  });
});

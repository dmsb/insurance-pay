import { InsurancepayModule } from './insurancepay.module';

describe('InsurancepayModule', () => {
  let insurancepayModule: InsurancepayModule;

  beforeEach(() => {
    insurancepayModule = new InsurancepayModule();
  });

  it('should create an instance', () => {
    expect(insurancepayModule).toBeTruthy();
  });
});

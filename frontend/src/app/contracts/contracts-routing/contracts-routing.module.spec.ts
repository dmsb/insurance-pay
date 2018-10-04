import { ContractsRoutingModule } from './contracts-routing.module';

describe('ContractsRoutingModule', () => {
  let contractsRoutingModule: ContractsRoutingModule;

  beforeEach(() => {
    contractsRoutingModule = new ContractsRoutingModule();
  });

  it('should create an instance', () => {
    expect(contractsRoutingModule).toBeTruthy();
  });
});

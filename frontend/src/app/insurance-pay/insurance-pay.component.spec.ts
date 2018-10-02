import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepayComponent } from './insurance-pay.component';

describe('InsurancepayComponent', () => {
  let component: InsurancepayComponent;
  let fixture: ComponentFixture<InsurancepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

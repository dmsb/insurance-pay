import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancepayComponent } from './insurance-pay.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [InsurancepayComponent]
})
export class InsurancePayModule { }

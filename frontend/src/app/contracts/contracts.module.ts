import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts.component';
import { ContractsRoutingModule } from './contracts-routing/contracts-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContractsRoutingModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [ContractsComponent]
})
export class ContractsModule { }

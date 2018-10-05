import { Component, OnInit } from '@angular/core';
import { InsurancepayService } from '../services/insurance-pay.service';
import { InsuranceContract } from '../model/InsuranceContract';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  constructor(private insurancePayService: InsurancepayService) { }

  contracts: InsuranceContract[];
  currentContract: InsuranceContract;

  ngOnInit() {
    this.currentContract = new InsuranceContract();
    
    $(document).ready(function(){
      $('.modal').modal();
      M.updateTextFields();
    });

    this.insurancePayService.getContracts().subscribe(
      data => {
        if (data.length > 0) {
          this.contracts = data;
        }
      });

  }

  setCurrentContract(currentContract: InsuranceContract) {
    this.currentContract = currentContract;
    $(document).ready(function(){
      M.updateTextFields();
    });
  }

  edit() {
    this.insurancePayService.updateContract(this.currentContract);
  }

  delete() {
    this.insurancePayService.deleteContract(this.currentContract._id);
  }


}
import { Component, OnInit } from '@angular/core';
import { Vehicle } from './model/vehicle';
import { VehicleQuotation } from './model/VehicleQuotation';
import { InsurancepayService } from './services/insurance-pay.service';
import { InsuranceCompany } from './model/InsuranceCompany';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  vehicle: Vehicle;
  insuranceCompanyOffers: InsuranceCompany[];

  constructor(private insurancePayService: InsurancepayService) {
  }

  ngOnInit() {
    this.vehicle = new Vehicle();
    $('.datepicker').click(false);

    $(document).ready(function () {
      $('.parallax').parallax();
      $('.datepicker').datepicker({
        format: 'mm-yyyy'
      });
    });

    if (this.insuranceCompanyOffers == null) {
      $('.quotations').hide();
    }
  }

  openDatePicker(event) {
    M.Datepicker.getInstance(document.getElementById('vehicle_fabrication_date')).open();
  }

  loadOffers() {
    let datestring = $('.datepicker').val().split('-');
    this.vehicle.fabricationDate = new Date(datestring[1], datestring[0]);
    alert(this.vehicle.fabricationDate);
    this.insurancePayService.getInsuranceCompanyOffers(this.vehicle).subscribe(
      data => {
        this.insuranceCompanyOffers = data;
      });
      
      $('.quotations').show();

  }
}

import { Component, OnInit } from '@angular/core';
import { Vehicle } from './model/vehicle';
import { VehicleQuotation } from './model/VehicleQuotation';
import { InsurancepayService } from './services/insurance-pay.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  vehicle: Vehicle;
  vehicleCotations: VehicleQuotation[];

  constructor(private insurancePayService: InsurancepayService) {
  }

  ngOnInit() {
    this.insurancePayService.getVehiclesQuotation().subscribe(
      data => {
        this.vehicleCotations = data;
      });

    $(document).ready(function () {
      $('.parallax').parallax();
      $('.datepicker').datepicker({
        format : 'mm/yyyy'
      });
    });

    if(this.vehicleCotations == null) {
      $('.quotations').hide();
    }
  }


}

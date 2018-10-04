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

    $(document).ready(function() {
      $("html,body").animate({scrollTop: 0}, 100);
    });
    
    $(document).ready(function () {
      $('.parallax').parallax();
      $('.datepicker').datepicker({
        format: 'mm-yyyy'
      });
    });

    if (this.insuranceCompanyOffers == null) {
      $('#offers').hide();
    }
  }

  openDatePicker() {
    M.Datepicker.getInstance(document.getElementById('vehicle_fabrication_date')).open();
  }

  loadOffers() {
    if ($('.datepicker').val() != '') {
      let datestring = $('.datepicker').val().split('-');
      this.vehicle.fabricationDate = new Date(datestring[1], datestring[0]);
      this.insurancePayService.getInsuranceCompanyOffers(this.vehicle).subscribe(
        data => {
          if (data.length > 0) {
            this.insuranceCompanyOffers = data;
            $('#offers').show();
            $('html,body').animate({
              scrollTop: $("#offers").offset().top
            }, 1000);
          } else {
            M.toast({ html: 'Oh, sorry. No offer was found for your vehicle :c', classes: 'green rounded' });
            $('#offers').hide();
          }
        });
    } else {
      M.toast({ html: 'Please, provide the vehicle fabrication date', classes: 'red rounded' });
    }
  }
  
  chooseOffer(offerId) {
    alert(offerId);
  }
}

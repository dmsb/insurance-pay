import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { InsuranceCompany } from '../model/InsuranceCompany';
import { InsurancepayService } from '../services/insurance-pay.service';
import { InsuranceContract } from '../model/InsuranceContract';
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vehicle: Vehicle;
  insuranceCompanyOffers: InsuranceCompany[];
  selectedOffer: InsuranceCompany;
  contract: InsuranceContract;

  constructor(private insurancePayService: InsurancepayService) {
  }

  ngOnInit() {
    this.vehicle = new Vehicle();
    this.contract = new InsuranceContract();

    $(document).ready(function() {
      $("html,body").animate({scrollTop: 0}, 100);
    });
    
    $(document).ready(function () {
      $('.parallax').parallax();
      $('.datepicker').datepicker({
        format: 'mm-yyyy'
      });
      $('.modal').modal();
    });

    if (this.insuranceCompanyOffers == null) {
      $('#offers').hide();
    }
  }

  openDatePicker() {
    M.Datepicker.getInstance(document.getElementById('vehicle_fabrication_date')).open();
  }

  setSelectedOffer(offer: InsuranceCompany) {
    this.selectedOffer = offer;
  }

  pay() {
    this.contract.vehicle = this.vehicle;
    this.contract.insuranceCompany = this.selectedOffer;
    this.insurancePayService.addContract(this.contract);
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

}

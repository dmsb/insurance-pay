import { Component, OnInit } from '@angular/core';
import { Vehicle } from './model/vehicle';
import { VehicleCotation } from './model/VehicleCotation';
import { InsuranceCompany } from './model/InsuranceCompany';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  vehicle: Vehicle;
  vehicleCotations: VehicleCotation[];


  ngOnInit() {
    $(document).ready(function () {
      $('.parallax').parallax({
        responsiveThreshold: 100
      });
      $('.datepicker').datepicker();
    });
    if(this.vehicleCotations == null) {
      this.loadVehicleLocations();
      //$('.cotations').hide();
    }
  }

  loadVehicleLocations() {
    let vehicleCotation1 = new VehicleCotation();
    vehicleCotation1.insuranceCompany = new InsuranceCompany();
    vehicleCotation1.insuranceCompany.cnpj = '12345678';
    vehicleCotation1.insuranceCompany.email = 'company3@company.com';
    vehicleCotation1.insuranceCompany.phone = '8134433443';
    vehicleCotation1.insuranceCompany.fantasyName = 'fantasy 1';
    vehicleCotation1.price = 1234;

    let vehicleCotation2 = new VehicleCotation();
    vehicleCotation2.insuranceCompany = new InsuranceCompany();
    vehicleCotation2.insuranceCompany.cnpj = '8866552288';
    vehicleCotation2.insuranceCompany.email = 'company2@company.com';
    vehicleCotation2.insuranceCompany.phone = '8134433445';
    vehicleCotation2.insuranceCompany.fantasyName = 'fantasy 2';
    vehicleCotation2.price = 1235;

    let vehicleCotation3 = new VehicleCotation();
    vehicleCotation3.insuranceCompany = new InsuranceCompany();
    vehicleCotation3.insuranceCompany.cnpj = '84622202';
    vehicleCotation3.insuranceCompany.email = 'company3@company.com';
    vehicleCotation3.insuranceCompany.phone = '8134433446';
    vehicleCotation3.insuranceCompany.fantasyName = 'fantasy 3';
    vehicleCotation3.price = 2341;

    this.vehicleCotations = [vehicleCotation1, vehicleCotation2, vehicleCotation3];
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { InsuranceContract } from '../model/InsuranceContract';
import { Vehicle } from '../model/vehicle';
import { InsuranceCompany } from '../model/InsuranceCompany';
declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class InsurancepayService {

  uri = "http://localhost:4000/insurancepayproject";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  //exampl: http://localhost:4000/insurance_companies?brand=FIAT&model=UNO MILE FIRE&modelYear=2005&fabricationDate=2016-05-24T04:18:38.000Z
  getInsuranceCompanyOffers(vehicle: Vehicle) {
    let paramsData = {
      brand : vehicle.brand,
      fabricationDate : vehicle.fabricationDate.toString(),
      model : vehicle.model,
      modelYear : vehicle.modelYear.toString()
    };
    
    return this.httpClient.get<InsuranceCompany[]>(`${this.uri}/insurance_companies`, {params: paramsData});
  }

  getContracts() {
    return this.httpClient.get<InsuranceContract>(`${this.uri}/contracts`);
  }

  addContract(insuranceContract: InsuranceContract) {
    return this.httpClient.post(`${this.uri}/contracts`, insuranceContract);
  }

  updateContract(insuranceContract: InsuranceContract) {
    return this.httpClient.put(`${this.uri}/contracts/${insuranceContract._id}`, insuranceContract);
  }

  deleteContract(id) {
    return this.httpClient.delete(`${this.uri}/contracts/${id}`, id);
  }
}

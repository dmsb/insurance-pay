import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InsuranceContract } from '../model/InsuranceContract';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';
import { VehicleQuotation } from '../model/VehicleQuotation';
declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class InsurancepayService {

  uri = "http://localhost:4000";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  getVehicles() {
    return this.httpClient.get<Vehicle>(`${this.uri}/vehicles`);
  }

  getVehiclesQuotation() {
    return this.httpClient.get<VehicleQuotation[]>(`${this.uri}/vehicle_quotations`);
  }

  getVehiclesById(id) {
    return this.httpClient.get<Vehicle>(`${this.uri}/vehicles`);
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

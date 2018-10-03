import { Identification } from "./Identification";
import { VehicleQuotation } from "./VehicleQuotation";

export class InsuranceCompany extends Identification {
    fantasyName: String;
    email: String;
    phone: String;
    headOfficeCity: String;
    neighborhood: String;
    zipcode: String;
    state: String;
    cnpj: String;
    stateRegistration: String;
    directorName: String;
    directorNationality: String;
    directorMaritalState: String;
    directorProfission: String;
    directorRg: String;
    directorCpf: String;
    directorZipCode: String;    
    directorCity: String;
    directorState: String;
    directorCountry: String;
    fabricationMonthYearPercentage: Number;
    vehicleQuotations: VehicleQuotation[];

}
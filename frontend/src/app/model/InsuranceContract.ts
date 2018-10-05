import { Identification } from "./Identification";
import { Vehicle } from "./vehicle";

class InsuranceCompany {
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
}

export class InsuranceContract extends Identification {

    insuranceCompany: InsuranceCompany;
    vehicle: Vehicle;
    price: Number;

    deadLineForAccidents: Number;
    contractCoverageInMonths: Number;

    policyHolderFullName: String;
    policyHolderRg: String;
    policyHolderCpf: String;
    policyHolderEmail: String;
    policyHolderCell: String;
    policyHolderCodeZip: String;
    policyHolderNumber: String;
    policyHolderComplement: String;
    policyHolderNeighborhood: String;
    policyHolderCity: String;
    policyHolderState: String;
    policyHolderNationality: String;
    policyHolderGender: String;
    policyHolderBirthdate: Date;
    policyHolderMaritalState: String;
    policyHolderHaveSon: String;
    policyHolderIsWorking: Boolean;
    policyHolderpIsStudying: Boolean;
    policyHolderStudyPeriod: String;
    policyHolderExistsPeaples1824: String;
    policyHolderPeapleGender: String;
    policyHolderHomeType: String; 
    policyHolderProfession: String;
}
import { Identification } from "./Identification";
import { VehicleCotation } from "./VehicleCotation";

export class InsuranceContract extends Identification {
    deadLineForAccidents: Number;
    contractCoverageInMonths: Number;

    vehicleCotation: VehicleCotation;

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
    policyHolderProfession: String
}
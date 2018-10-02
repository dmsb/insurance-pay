import { Identification } from "./Identification";
import { Vehicle} from "./Vehicle";
import { InsuranceCompany } from "./InsuranceCompany";

export class VehicleCotation extends Identification {
    vehicle: Vehicle;
    insuranceCompany: InsuranceCompany;
    price: Number;
}
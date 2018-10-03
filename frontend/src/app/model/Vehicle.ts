import { Identification } from "./Identification";

export class Vehicle extends Identification {
    brand: string;
    fabricationDate: Date;
    modelYear: Date;
    model: string;
    plate: string;
}
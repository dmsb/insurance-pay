import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let InsuranceCompany = new Schema({
    fantasyName: String,
    email: String,
    phone: String,
    headOfficeCity: String,
    neighborhood: String,
    zipcode: String,
    state: String,
    cnpj: String,
    stateRegistration: String,
    directorName: String,
    directorNationality: String,
    directorMaritalState: String,
    directorProfission: String,
    directorRg: String,
    directorCpf: String,
    directorZipCode: String,    
    directorCity: String,
    directorState: String,
    directorCountry: String
});

let Vehicle = new Schema({
    brand: String,
    fabricationDate: Date,
    modelYear: Date,
    model: String,
    plate: String
});

let InsuranceContract = new Schema({
    insuranceCompany: InsuranceCompany,
    vehicle: Vehicle,
    price: Number,
    
    deadLineForAccidents: Number,
    contractCoverageInMonths: Number,

    policyHolderFullName: String,
    policyHolderRg: String,
    policyHolderCpf: String,
    policyHolderEmail: String,
    policyHolderCell: String,
    policyHolderCodeZip: String,
    policyHolderNumber: String,
    policyHolderComplement: String,
    policyHolderNeighborhood: String,
    policyHolderCity: String,
    policyHolderState: String,
    policyHolderNationality: String,
    policyHolderGender: String,
    policyHolderBirthdate: Date,
    policyHolderMaritalState: String,
    policyHolderHaveSon: String,
    policyHolderIsWorking: Boolean,
    policyHolderpIsStudying: Boolean,
    policyHolderStudyPeriod: String,
    policyHolderExistsPeaples1824: String,
    policyHolderPeapleGender: String,
    policyHolderHomeType: String, 
    policyHolderProfession: String

}, { collection: 'insurance_contract' });

export default mongoose.model('InsuranceContract', InsuranceContract);
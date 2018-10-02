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

}, { collection: 'insurancecompanycollection' });

export default mongoose.model('InsuranceCompany', InsuranceCompany);
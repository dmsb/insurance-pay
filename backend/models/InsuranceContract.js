import mongoose from 'mongoose';
import Vehicle from './Vehicle';
import InsuranceCompany from './InsuranceCompany';

const Schema = mongoose.Schema;

let InsuranceContract = new Schema({
    insuranceCompany: InsuranceCompany,
    vehicle: Vehicle,
    
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

}, { collection: 'insurancecontractcollection' });

export default mongoose.model('InsuranceContract', InsuranceContract);
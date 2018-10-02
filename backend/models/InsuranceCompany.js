import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let InsuranceCompany = new Schema({
    fantasyName: String,
    email: String,
    phone: String
}, { collection: 'insurancecompanycollection' });

export default mongoose.model('InsuranceCompany', InsuranceCompany);
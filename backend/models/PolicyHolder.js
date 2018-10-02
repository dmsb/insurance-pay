import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var PolicyHolder = new Schema({
    fullName: String,
    cpf: String,
    email: String,
    cell: String,
    zip: String,
    number: String,
    complement: String,
    gender: String,
    birthdate: Date,
    maritalState: String,
    haveSon: String,
    isWorking: Boolean,
    isStudying: Boolean,
    studyPeriod: String,
    existsPeaples1824: String,
    peapleGender: String,
    homeType: String, 
    profession: String
}, { collection: 'policyholdercollection' });

export default mongoose.model('PolicyHolder', PolicyHolder);
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Vehicle = new Schema({
    brand: String,
    fabricationDate: Date,
    modelYear: Date,
    model: String,
    insurancePrice: Number
}, { collection: 'vehiclecollection' });

export default mongoose.model('Vehicle', Vehicle);
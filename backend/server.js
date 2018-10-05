import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import InsuranceCompany from './models/InsuranceCompany';
import InsuranceContract from './models/InsuranceContract';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/insurancepay');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/insurancepayproject/insurance_companies').get((req, res) => {
    InsuranceCompany.find({ 
        'vehicleQuotations.brand' : req.query.brand,
        'vehicleQuotations.model' : req.query.model,
        'vehicleQuotations.modelYear' : parseInt(req.query.modelYear)
    }).select('fantasyName email phone cnpj fabricationMonthYearPercentage vehicleQuotations.$')
    .lean().exec( (err, result) => {
        if (err) {
            console.log(err);
        } else {
            result.forEach(item => {
                let years = 2018 - new Date(req.query.fabricationDate).getFullYear();
                 item.vehicleQuotations
                let currentPrice = item.vehicleQuotations[0].price;
                item.vehicleQuotations[0].price = 
                ((years * item.fabricationMonthYearPercentage / 100) * currentPrice) + currentPrice;
            });
            res.json(result);
        }
    });
});

router.route('/insurancepayproject/contracts/add').post((req, res) => {
    let contract = new InsuranceContract(req.body);
    contract.save()
        .then(contract => {
            res.status(200).json({'contract': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/insurancepayproject/contracts/delete/:id').delete((req, res) => {
    InsuranceContract.findByIdAndRemove({_id: req.params.id}, (err, result) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
});

router.route('/insurancepayproject/contracts/update/:id').put((req, res) => {
    InsuranceContract.findById(req.params.id, (err, contract) => {
        if (!contract)
            return next(new Error('Could not load document'));
        else {
            contract.brand = req.body.brand;
            contract.fabricationDate = req.body.fabricationDate;
            contract.modelYear = req.body.modelYear;
            contract.model = req.body.model;

            contract.save().then(contract => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
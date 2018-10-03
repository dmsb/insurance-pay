import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import InsuranceCompany from './models/InsuranceCompany';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/insurancepay');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//http://localhost:4000/insurance_companies?brand=FIAT&model=UNO MILE FIRE&modelYear=2005
router.route('/insurance_companies').get((req, res) => {
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
                console.log(years);
                console.log(item.fabricationMonthYearPercentage);
                console.log(currentPrice);
                item.vehicleQuotations[0].price = 
                ((years * item.fabricationMonthYearPercentage / 100) * currentPrice) + currentPrice;
            });
            res.json(result);
        }
    });
});

/*router.route('/vehicles').get((req, res) => {
    Vehicle.find((err, vehicles) => {
        if (err)
            console.log(err);
        else
            res.json(vehicles);
    });
});

router.route('/vehicles/:id').get((req, res) => {
    Vehicle.findById(req.params.id, (err, vehicle) => {
        if (err)
            console.log(err);
        else
            res.json(vehicle);
    });
});

router.route('/vehicles/add').post((req, res) => {
    let vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(vehicle => {
            res.status(200).json({'vehicle': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/vehicles/update/:id').put((req, res) => {
    Vehicle.findById(req.params.id, (err, vehicle) => {
        if (!vehicle)
            return next(new Error('Could not load document'));
        else {
            vehicle.brand = req.body.brand;
            vehicle.fabricationDate = req.body.fabricationDate;
            vehicle.modelYear = req.body.modelYear;
            vehicle.model = req.body.model;

            vehicle.save().then(vehicle => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/vehicles/delete/:id').delete((req, res) => {
    Vehicle.findByIdAndRemove({_id: req.params.id}, (err, vehicle) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})*/


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
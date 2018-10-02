import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Vehicle from './models/Vehicle';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/insurancepay');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/vehicles').get((req, res) => {
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
            vehicle.title = req.body.title;
            vehicle.responsible = req.body.responsible;
            vehicle.description = req.body.description;
            vehicle.severity = req.body.severity;
            vehicle.status = req.body.status;

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
})


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
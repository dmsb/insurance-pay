var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    vehicleModel.Vehicle.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
})/

/* GET Vehiclelist page. */
router.get('/vehicles', function (req, res) {
    vehicleModel.Vehicle.find({}).lean().exec(
        function (e, docs) {
            res.json(docs);
        });
});

module.exports = router;

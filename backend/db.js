var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/insurancepay', { promiseLibrary: require('bluebird') })
.then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));

module.exports = {  Mongoose: mongoose }
var mongoose = require('mongoose');

var carSchema;
carSchema = mongoose.Schema({
    make: String,
    model: String,
    firstRegistration: Date,
    price: Number,
    region: String,
    published: Date
});

var Car = mongoose.model('Car', carSchema);

module.exports.seedInitialCars = function() {
    Car.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find cars: ' + err);
            return;
        }

        if (collection.length === 0) {
            Car.create({make: 'Mazda', model: 'MX-6', firstRegistration: new Date('1997-03-08'), region: 'Sofia', price: 3000, published: new Date('2014-12-08') });
            Car.create({make: 'BMW', model: '330', firstRegistration: new Date('1999-03-08'), region: 'Plovdiv', price: 5000, published: new Date('2014-06-08') });
            Car.create({make: 'Mercedes', model: 'CLK', firstRegistration: new Date('2001-03-08'), region: 'Plovdiv', price: 7000, published: new Date('2014-09-08') });
        }
    });
};
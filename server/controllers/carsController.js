var mongoose = require('mongoose');
//var Car = require('../models/Car'),
//    Car = require('mongoose').model('Car');

var Car = mongoose.model("Car");

module.exports = {
    getAllCars: function(req, res) {
        Car.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Cars could not be loaded: ' + err);
            }
            console.log(collection);
            res.send(collection);
        })
    },
    getCarById: function(req, res, next) {
        Car.findOne({_id: req.params.id}).exec(function(err, car) {
            if (err) {
                console.log('Car could not be loaded: ' + err);
            }

            res.send(car);
        })
    }
};
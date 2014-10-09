var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');
//var Car = require('../models/Car'),
//    Car = require('mongoose').model('Car');

var Car = mongoose.model("Car");

function addCar(data, res) {
    var create,
        Model = mongoose.model("Model"),
        User = mongoose.model("User"),
        EngineType = mongoose.model("EngineType"),
        GearboxType = mongoose.model("GearboxType"),
        Category = mongoose.model("Category"),
        Color = mongoose.model("Color");

    create = {
        data: function (filters) {
            Model.findOne({ name: filters.model }).populate("make")
                .exec(function (err, model) {
                    var obj = {};
                    obj.model = model;

                    create._getUsers(filters, obj);
                });
        },
        _getUsers: function (filters, dataObject) {
            User.findOne({ username: filters.username }).exec(function (err, user) {
                dataObject.user = user;

                create._getEngineTypes(filters, dataObject);
            });
        },
        _getEngineTypes: function (filters, dataObject) {
            EngineType.findOne({ name: filters.engineType }).exec(function (err, engine) {
                dataObject.engineType = engine;

                create._getGearboxType(filters, dataObject);
            });
        },
        _getGearboxType: function (filters, dataObject) {
            GearboxType.findOne({ name: filters.gearboxType }).exec(function (err, gearbox) {
                dataObject.gearboxType = gearbox;

                create._getCategory(filters, dataObject);
            });
        },
        _getCategory: function (filters, dataObject) {
            Category.findOne({ name: filters.category }).exec(function (err, category) {
                dataObject.category = category;

                create._getColor(filters, dataObject);
            });
        },
        _getColor: function (filters, dataObject) {
            Color.findOne({ name: filters.color }).exec(function (err, color) {
                dataObject.color = color;

                create._finish(filters, dataObject);
            });
        },
        _finish: function (filters, data) {
            Car.create({
                make: data.model.make,
                model: data.model,
                user: data.user,
                engineType: data.engineType,
                gearboxType: data.gearboxType,
                category: data.category,
                color: data.color,
                price: filters.price,
                yearOfProduction: filters.yearOfProduction,
                mileage: filters.mileage,
                horsepower: filters.horsepower,
                engineDisplacement: filters.engineDisplacement,
                photoUrl: filters.photoUrl,
                description: filters.description,
                published: new Date()
            }, function (err, car) {
                if (err) {
                    console.log('Failed to create new car: ' + err);
                    return;
                }

                if (res !== null && res !== "seed") {
                    res.send(car);
                }
            });
        }
    };

    create.data(data);
}

module.exports = {
    getAllCars: function (req, res) {
        Car.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Cars could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getCarById: function (req, res, next) {
        Car.findOne({ _id: req.params.id }).exec(function (err, car) {
            if (err) {
                console.log('Car could not be loaded: ' + err);
            }

            res.redirect('/api/cars');
        })
    },
    createCar: function (req, res) {
        var fstream;
        req.pipe(req.busboy);
        var car = {};

        req.busboy.on('file', function (fieldname, file, filename) {
            var filePath = config.rootPath + 'public\\img\\cars\\' + filename;            
            fstream = fs.createWriteStream(filePath);
            file.pipe(fstream);
            car.photoUrl = filePath;
        });

        req.busboy.on('field', function (fieldname, val) {
            car[fieldname] = val;
        });

        req.busboy.on('finish', function () {
            addCar(car, res);
        });
    },
    addCar: addCar,
    getPicture: function (req, res) {
        Car.findOne({ _id: req.params.id }).exec(function (err, car) {
            if (err) {
                res.status('400');
                return res.send("There no such car");
            }

            if (req.query.attachment === 'true') {
                res.download(car.photoUrl);
            } else {
                res.sendFile(path.resolve(car.photoUrl));
            }
        });
    }
};
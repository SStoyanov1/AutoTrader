var mongoose = require('mongoose'),
    REQUIRED = "{PATH} is required",
    Schema = mongoose.Schema;

var carSchema = mongoose.Schema({
    make: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "Make"
    },
    model: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "Model"
    },
    user: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "User"
    },
    engineType: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "EngineType"
    },
    gearboxType: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "GearboxType"
    },
    category: {
        type: Schema.Types.ObjectId, require: REQUIRED,
        ref: "Category"
    },
    color: {
        type: Schema.Types.ObjectId,
        ref: "Color"
    },
    price: { type: Number, require: REQUIRED },
    yearOfProduction: { type: Number, require: REQUIRED },
    mileage: { type: Number, require: REQUIRED },
    horsepower: Number,
    engineDisplacement: Number,
    description: String,
    photoUrl: String,
    published: Date
});

var Car = mongoose.model('Car', carSchema);

module.exports.seedInitialCars = function() {
    Car.find({}).exec(function(err, collection) {
        var carsController = require("../controllers/carsController");

        if (err) {
            console.log('Cannot find cars: ' + err);
            return;
        }

        if (collection.length === 0) {
            carsController.createCar({
                make: "Subaru",
                model: "Impreza",
                username: "misho",
                engineType: "Gasoline",
                gearboxType: "Sequential",
                category: "Sedan",
                color: "Blue",
                price: 24500,
                yearOfProduction: 2004,
                mileage: 54000,
                horsepower: 275,
                engineDisplacement: 2000,
                photoUrl: "no_photo.png",
                description: "Random description"
            });

            console.log("Cars added to the database.");
        }
    });
};
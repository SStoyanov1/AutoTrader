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
    gearBoxType: {
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
    photoUrl: String,
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
            // TODO: Find a proper way for seeding
        }
    });
};
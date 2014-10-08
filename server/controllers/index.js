var usersController = require('../controllers/usersController');
var carsController = require('../controllers/carsController');
var makesController = require('../controllers/MakesController');

module.exports = {
    users: usersController,
    cars: carsController,
    makes: makesController
};
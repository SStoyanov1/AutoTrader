var usersController = require('../controllers/usersController');
var carsController = require('../controllers/carsController');
var makesController = require('../controllers/MakesController');
var categoriesController = require('../controllers/CategoriesController');

module.exports = {
    users: usersController,
    cars: carsController,
    makes: makesController,
    categories: categoriesController
};
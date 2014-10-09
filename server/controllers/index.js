var usersController = require('../controllers/usersController');
var carsController = require('../controllers/carsController');
var makesController = require('../controllers/MakesController');
var categoriesController = require('../controllers/CategoriesController');
var modelsController = require('../controllers/ModelsController');

module.exports = {
    users: usersController,
    cars: carsController,
    makes: makesController,
    categories: categoriesController,
    models: modelsController
};
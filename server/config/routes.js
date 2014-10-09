var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Car = mongoose.model('Car'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/cars/picture/:id', controllers.cars.getPicture)
    app.get('/api/cars', controllers.cars.getAllCars);
    app.post('/api/cars', controllers.cars.createCar);    
    app.get('/api/cars/:id', controllers.cars.getCarById);

    app.get('/api/makes', controllers.makes.getAllMakes);
    app.post('/api/makes', controllers.makes.createMake);
    app.get('/api/makes/:id', controllers.makes.getMakeById);
    app.put('/api/makes/:id', controllers.makes.updateMake);

    app.get('/partials/:partialDir/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialDir + '/' + req.params.partialName);
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};
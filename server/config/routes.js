var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);

    app.get('/partials/:partialDir/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialDir + '/' + req.params.partialName);
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};
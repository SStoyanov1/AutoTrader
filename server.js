var express = require('express');
var env = process.env.NODE_ENV || 'development';
var app = express(),
    config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

var io = require('socket.io')(app.listen(config.port));

io.on('connection', function (socket) {
    socket.on('make added', function (data) {
        io.emit('make added', data);
    });

    socket.on('model added', function (data) {
        io.emit('model added', data);
    });

    socket.on('category added', function (data) {
        io.emit('category added', data);
    });
});

console.log('Server running on port: ' + config.port);
console.log(env);
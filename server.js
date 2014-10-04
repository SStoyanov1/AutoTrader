var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3030;
var app = express();

app.set('view engine', 'jade');
app.set(bodyParser());
app.set('views', __dirname + '/server/views');
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function(str, path) {
            return stylus(str).set('filename', path);
        }
    }
));

app.use(express.static(__dirname + '/public'));

if (env == 'development') {
    mongoose.connect('mongodb://localhost/autotraderdb');
}
else {
    mongoose.connect("mongodb://admin:autotraderdb@ds063909.mongolab.com:63909/autotraderdb");
}

var db = mongoose.connection;

db.once('open', function(err) {
    if (err) {
        console.log('Database could not be opend ' + err);
        return;
    }

    console.log('Database running...')
});

var messageSchema = mongoose.Schema({
   message: String
});

var Message = mongoose.model('Message', messageSchema);
var messageFromDb;
Message.create({message: 'Hi from mongoose'})
    .then(function(model) {
        messageFromDb = model.message;
});

db.on('error', function(err) {
   console.log('Database error ' + err);
});

app.get('/partials/:partialName', function(req, res) {
    res.render('partials/' + req.params.partialName);
});

app.get('*', function(req, res) {
   res.render('index', { message: messageFromDb });
});

app.listen(port);
console.log('Server running on port: '+ port);
console.log(env);
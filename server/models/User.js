var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    username: { type: String, require: '{PATH} is required', unique: true },
    firstName: { type: String, require: '{PATH} is required' },
    lastName: { type: String, require: '{PATH} is required' },
    salt: String,
    hashPass: String,
    roles: [String]
});

userSchema.method({
    authenticate: function(password) {
        if (generateHashedPassword(this.salt, password) === this.hashPass) {
            return true;
        }
        else {
            return false;
        }
    }
});

var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function() {
    User.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users ' + err);
            return;
        }

        if (collection.length === 0) {
            var salt;
            var hashedP
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Georgi');
            User.create({username: 'gosho', firstName: 'Georgi', lastName: 'Georgiev', salt: salt, hashPass: hashedPwd, roles: ['admin']});
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Mihail');
            User.create({username: 'misho', firstName: 'Mihail', lastName: 'Mikov', salt: salt, hashPass: hashedPwd, roles: ['standard']});
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, 'Peter');
            User.create({username: 'pesho', firstName: 'Peter', lastName: 'Johnson', salt: salt, hashPass: hashedPwd});
            console.log('Users added to database...');
        };
    });
};
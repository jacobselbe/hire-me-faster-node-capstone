'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    created: {type: Date, default: Date.now}
});

const applicationsSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    jobDetails: { type: String, required: true },
    notes: { type: String, required: true },
    username: { type: String, required: true }
});

userSchema.methods.serialize = function () {
    return {
        id: this._id,
        username: this.username,
        password: this.password,
        created: this.created,
        applications: this.applications
    };
};

userSchema.methods.validatePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isValid) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, isValid);
    });
};

const User = mongoose.model('User', userSchema);
const Applications = mongoose.model('Applications', applicationsSchema);

module.exports = { User, Applications };
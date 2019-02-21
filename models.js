'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    created: {type: Date, default: Date.now},
    applications: [{
        companyName: {type: String, required: true},
        jobDetails: { type: String, required: true },
        notes: { type: String, required: true }
    }]
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

const User = mongoose.model('User', userSchema);

module.exports = { User };
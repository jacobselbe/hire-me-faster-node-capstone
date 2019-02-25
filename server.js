'use strict';

const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { DateTime } = require("luxon");
const { DATABASE_URL, PORT } = require('./config');
const { User } = require('./models');


const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

app.get('/users', (req, res) => {
    User
        .find()
        .then(users => {
            res.json(users.map(user => user.serialize()));
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went terribly wrong' });
        });
});

app.get('/users/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then(user => res.json(user.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went horribly awry' });
        });
});

app.post('/users/create', (req, res) => {
    console.log(req.body);
    
    let username = req.body.username;
    let password = req.body.password;
    password = password.trim();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error on genSalt'
            });
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error on hash'
                });
            }

            User.create({
                username,
                password: hash
            }, (err, item) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Error on Create User'
                    });
                }
                if (item) {
                    console.log(`New user with username ${username} was created`);
                    return res.status(200).json(item);
                }
            });
        });
    });
});

app.delete('/users/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'something went terribly wrong' });
        });
});

app.put('/users/:id', (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
        res.status(400).json({
            error: 'Request path id and request body id values must match'
        });
    }

    const updated = {};
    const updateableFields = ['username', 'password'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    User
        .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
        .then(updatedUser => res.status(204).end())
        .catch(err => res.status(500).json({ message: 'Something went wrong' }));
});

app.delete('/:id', (req, res) => {
    User
        .findByIdAndRemove(req.params.id)
        .then(() => {
            console.log(`Deleted user with id \`${req.params.id}\``);
            res.status(204).end();
        });
});

app.use('*', function (req, res) {
    res.status(404).json({ message: 'Not Found' });
});

let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, { useNewUrlParser: true }, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer().catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };
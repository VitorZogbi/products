const mongoose = require('mongoose');

const client = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    username : {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Client', client);
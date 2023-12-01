const mongoose = require('mongoose');

const userShecma = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const user = mongoose.model('User', userShecma,'users');

module.exports = user;
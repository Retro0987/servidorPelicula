const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    nombre:{type:String},
    director:{type:String},
    ano:{type:Number},
    duracion:{type:Number},
    genero:{type:String},
});

module.exports = mongoose.model('Movie', movieSchema, 'movie');
const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://jejazavalale:WqF1BJjWic9LgedF@cluster0.gl2en89.mongodb.net/?retryWrites=true&w=majority`
    ) 
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar a MongoDB: ' , err));


module.exports = mongoose;
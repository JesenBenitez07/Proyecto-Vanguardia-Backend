const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/ServicioSolidario';

mongoose.connect(url);

const db = mongoose.connection;
db.on('Error', console.error.bind(console,'Error al conectar BD con Mongo'));
db.once('open', function callback(){
    console.log('Conectando a Mongo DB...!');
})

module.exports= db;
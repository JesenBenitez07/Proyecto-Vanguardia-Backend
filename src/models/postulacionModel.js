const mongoose = require('mongoose');

const postulacionSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    puesto: { type: String, required: true },
    experiencia: { type: String, required: true }
});

const Postulacion = mongoose.model('Postulacion', postulacionSchema);

module.exports = Postulacion


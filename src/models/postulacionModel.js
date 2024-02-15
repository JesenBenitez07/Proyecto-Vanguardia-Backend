const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postulacionSchema = new Schema({
    idpostulacion: {type: Number, required: false},
    idempleo: {type: Number, required: false},
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    puesto: { type: String, required: true },
    experiencia: { type: String, required: true },
    fecha: { type: Date, required: true }
},{versionkey: false});

const Postulacion = mongoose.model('postulacion', postulacionSchema);

module.exports = Postulacion;


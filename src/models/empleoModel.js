const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleoSchema = new Schema({
  idempleo: {type: Number, required: false},
  puesto: { type: String, required: true },
  descripcion: { type: String, required: true },
  company: { type: String, required: true },
  ubicacion: { type: String, required: true },
  fecha: { type: Date, required: true },
},{versionkey: false});

const Empleo = mongoose.model('empleo', empleoSchema);

module.exports = Empleo;
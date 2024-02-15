const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaSchema = new Schema({
    idempresa: {type: Number, required: false},
    email: { type: String, required: true },
    nombre: { type: String, required: true},
    password: { type: String, required: true},
},{versionkey: false});

const Empresa = mongoose.model('empresa', empresaSchema);

module.exports = Empresa;

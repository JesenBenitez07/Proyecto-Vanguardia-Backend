var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    iduser: {type: Number, required: false},
    email: { type: String, required: true },
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    password: { type: String, required: true},
},{versionkey: false});
const User = mongoose.model('user', userSchema);

module.exports = User; 




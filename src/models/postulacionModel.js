const mongoose = require('mongoose');

const postulacionSchema = new mongoose.Schema({
empleoId: mongoose.Types.ObjectId,
userId: mongoose.Types.ObjectId,

});

module.exports = mongoose.model('Postulacion', postulacionSchema);


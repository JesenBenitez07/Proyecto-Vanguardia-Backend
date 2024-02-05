const mongoose = require('mongoose');

const empleoSchema = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('Empleo', empleoSchema);


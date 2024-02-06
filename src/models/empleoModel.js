const mongoose = require('mongoose');

const empleoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String, required: true },
});

const empleo = mongoose.model('empleo', empleoSchema);

module.exports = empleo;
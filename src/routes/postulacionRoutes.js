const express = require('express');
const router = express.Router();
const Postulacion = require('../models/postulacionModel');

// Obtener todas las postulaciones
router.get('/', async (req, res) => {
try {
    const postulaciones = await Postulacion.find();
    res.json(postulaciones);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});

// Crear una nueva postulación
router.post('/', async (req, res) => {
const postulacion = new Postulacion({
    nombre: req.body.nombre,
    email: req.body.email,
    puesto: req.body.puesto,
    experiencia: req.body.experiencia
});

try {
    const nuevaPostulacion = await postulacion.save();
    res.status(201).json(nuevaPostulacion);
} catch (error) {
    res.status(400).json({ message: error.message });
}
});

module.exports = router;
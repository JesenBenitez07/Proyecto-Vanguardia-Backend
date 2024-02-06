const express = require('express');
const router = express.Router();
const empleo = require('../models/empleoModel');

// Obtener todas las propuestas de empleo
router.get('/', async (req, res) => {
    try {
    const Empleo = await Empleo.find();
    res.json(Empleo);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
});

// Crear una nueva propuesta de empleo
router.post('/', async (req, res) => {
    const { title, description, company, salary, location } = req.body;

    try {
    const newpropuestas = new empleo({ title, description, company, salary, location });
    const savedPropuestas = await newpropuestas.save();
    res.json(savedPropuestas);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
});

module.exports = router;


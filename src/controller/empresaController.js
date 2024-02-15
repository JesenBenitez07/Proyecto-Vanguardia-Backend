const express = require('express');
const router = express.Router();
const Empresa = require('../models/empresaModel');

// Ruta para obtener todas las empresas
router.get('/api/', async (req, res) => {
try {
    const empresa = await Empresa.find();
    res.json(empresa);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});

// Ruta para crear una nueva empresa
router.post('/api/', async (req, res) => {
const nuevaEmpresa = new Empresa({
    email: req.body.email,
    nombre: req.body.nombre,
    password: req.body.password,
});

try {
    const empresaGuardada = await nuevaEmpresa.save();
        res.status(201).json(empresaGuardada);
} catch (error) {
    res.status(400).json({ message: error.message });
}
});

// Ruta para obtener una empresa por ID
router.get('/api/', async (req, res) => {
try {
    const empresa = await Empresa.findById(req.params.id);
        res.json(empresa);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});

// Ruta para actualizar una empresa por ID
router.put('/api/:id', async (req, res) => {
try {
    const empresa = await Empresa.findById(req.params.id);
    if (req.body.email) {
    empresa.email = req.body.email;
    }
    if (req.body.nombre) {
        empresa.nombre = req.body.nombre;
    }
    if (req.body.password) {
        empresa.password = req.body.password;
    }

    const empresaActualizada = await empresa.save();
    res.json(empresaActualizada);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});

// Ruta para eliminar una empresa por ID
router.delete('/api/:id', async (req, res) => {
    try {
    const empresa = await Empresa.findById(req.params.id);
    await empresa.remove();
    res.json({ message: 'Empresa eliminada correctamente' });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});

module.exports = router;

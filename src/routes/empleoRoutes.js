const express = require('express');
const router = express.Router();
const empleoController = require('../controller/empleoController')

// Ruta para mostrar todas las postulaciones
router.post('/empleos/crear', empleoController.crear);

// Ruta para insertar una nueva postulación
router.get('/empleos', empleoController.visualizar);

// Ruta para editar una postulación por ID
router.put('/empleos/:id', empleoController.editar);

// Ruta para eliminar una postulación por ID
router.delete('/empleos/:id', empleoController.eliminar);

module.exports = router;


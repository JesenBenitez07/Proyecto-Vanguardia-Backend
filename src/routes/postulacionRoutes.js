const express = require('express')
const router = express.Router()

const postulacionController = require('../controller/postulacionController')

// Ruta para mostrar todas las postulaciones
router.get('/api/', postulacionController.visualizar);

// Ruta para insertar una nueva postulación
router.post('/api/crear', postulacionController.crear);

// Ruta para editar una postulación por ID
router.put('/api/:idpostulacion', postulacionController.editar);

// Ruta para eliminar una postulación por ID
router.delete('/api/:idpostulacion', postulacionController.eliminar);

module.exports = router;
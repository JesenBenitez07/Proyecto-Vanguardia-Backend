const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');

router.get('/', postulacionController.getAllPostulaciones);
router.post('/', postulacionController.createPostulacion);
// Agrega más rutas según sea necesario

module.exports = router;


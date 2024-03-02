const express = require('express')
const router = express.Router()
const postulacionController = require('../controller/postulacionController')

//Rutas
router.post('/', postulacionController.createPostulacion);
router.get('/', postulacionController.getPostulacions);
router.get('/:idpostulacion', postulacionController.getPostulacion);
router.put('/:idpostulacion', postulacionController.updatePostulacion);
router.delete('/:idpostulacion', postulacionController.deletePostulacion);

module.exports = router;
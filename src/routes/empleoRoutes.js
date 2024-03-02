const express = require('express');
const router = express.Router();
const empleoController = require('../controller/empleoController')

//Rutas
router.post('/', empleoController.createEmpleo);
router.get('/', empleoController.getEmpleos);
router.get('/:idempleo', empleoController.getEmpleo);
router.put('/:idempleo', empleoController.updateEmpleo);
router.delete('/:idempleo', empleoController.deleteEmpleo);

module.exports = router;


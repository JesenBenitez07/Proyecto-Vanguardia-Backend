const express = require('express');
const router = express.Router();
const empleoController = require('../controllers/empleoController');

router.get('/', empleoController.getAllEmpleos);
router.get('/:id', empleoController.getEmpleoById);
router.post('/', empleoController.createEmpleo);
// Agrega más rutas según sea necesario

module.exports = router;

module.exports = router;

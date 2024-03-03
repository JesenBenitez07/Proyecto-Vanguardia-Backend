const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');



// Rutas
router.post('/', userController.registerUser);
router.post('/', userController.loginUser);
router.get('/', userController.getregisterUsers);
router.get('/:iduser', userController.getregisterUser);
router.get('/:iduser', userController.deleteregisterUser);

module.exports = router;


const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const User = require('../models/userModel');

// Ruta para registrar un nuevo usuario
router.post('/register', authController.registerUser);

// Ruta para iniciar sesión
router.post('/login', authController.loginUser);

// Ruta para actualizar la información del usuario (requiere autenticación)
router.put('/update', authController.authenticateUser, authController.updateUser);

// Ruta para obtener la información del usuario (requiere autenticación)
router.get('/profile', authController.authenticateUser, authController.getUserProfile);

module.exports = router;





const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const userController = require('../controller/userController');



// Rutas
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;


/*var userService = require('../services/userServices');

var createUserControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "Student created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createUserControllerFn,loginUserControllerFn };*/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token JWT
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secreto', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const verifyRole = (requiredRole) => (req, res, next) => {
    const { role } = req.user;
    if (role !== requiredRole) {
        return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' });
    }
    next();
};

const registerUser = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        user = new User({
            email,
            password,
            role: role || 'user' // Si no se proporciona un rol, se establece como 'user' por defecto
        });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Guardar el usuario en la base de datos
        await user.save().then(
          res.redirect('/api/')
      ).catch

        res.json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const updateUser = async (req, res) => {
    // Implementa la lógica para actualizar la información del usuario aquí
};

const getUserProfile = async (req, res) => {
    // Implementa la lógica para obtener la información del usuario aquí
};

module.exports = { loginUser, verifyRole, registerUser, updateUser, getUserProfile};




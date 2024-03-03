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
/*const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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
        await user.save();

        // Respondemos con un código de estado 201 (Created) y un mensaje
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};*/
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.loginUser = async (req, res) => {
    
    try {
        const { email, password } = req.body;
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
        const token = jwt.sign({ userId: user._iduser }, 'secreto', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

exports.registerUser = async (req, res) => {
    
    try {
        const { nombre, apellido, email, password } = req.body;
        // Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        user = new User({           
            nombre,
            apellido,
            email,
            password,
        });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Guardar el usuario en la base de datos
        await user.save();
        res.json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Hubo un error del servidor');
    }
    
};

exports.getregisterUsers = async (req, res) => {

    try {

        const user = await User.find();
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error del servidor');
    }
}

exports.getregisterUser = async (req, res) => {

    try {

        let user = await User.findById(req.params.iduser);

        if(!user){
            res.status(404).json({msg:'Usuario no Encontrado'})
        }

        res.json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error del servidor');
    }
}

exports.deleteregisterUser = async (req, res) => {

    try {

        let user = await User.findById(req.params.iduser);

        if(!user){
            res.status(404).json({msg:'Usuario no Encontrado'})
        }

        await User.findOneAndRemove({_id: req.params.iduser})
        res.json({msg:"Usuario Eliminado Exitosamente"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error del servidor');
    }
}





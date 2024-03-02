const express = require('express');
const router = express.Router();
const Postulacion = require('../models/postulacionModel');

// Create
exports.createPostulacion = async (req, res) => {
    try {
        let postulacion = new Postulacion(req.body);

        await postulacion.save();
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};

// Read
exports.getPostulacions = async (req, res) => {
    try {
        const postulacion = await Postulacion.find();
        res.json(postulacion);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};

exports.getPostulacion = async (req, res) => {

    try {

        let postulacion = await Postulacion.findById(req.params.idpostulacion);

        if(!postulacion){
            res.status(404).json({msg:'Postulación no encontrada, pruebe con otra postulación.'})
        }

        res.json(postulacion);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
}
// Update
exports.updatePostulacion = async (req, res) => {
    try {
        const { nombre, email, puesto, experiencia, fecha } = req.body;
        let postulacion = await Postulacion.findById(req.params.idpostulacion);

        if (!postulacion) {
            res.status(404).json({ msg: 'Postulación no encontrada, pruebe con otra postulación' });
        }

        postulacion.nombre = nombre;
        postulacion.email = email;
        postulacion.puesto = puesto;
        postulacion.experiencia = experiencia;
        postulacion.fecha = fecha;

        postulacion = await Postulacion.findOneAndUpdate({_idpostulacion : req.params.idpostulacion}, Postulacion, {new:true})
        res.json(postulacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};

// Delete
exports.deletePostulacion = async (req, res) => {
    try {
        let postulacion = await Postulacion.findByIdAndDelete(req.params.idpostulacion);

        if (!postulacion) {
            res.status(404).json({ msg: 'Postulación no encontrada, pruebe con otra postulación' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};


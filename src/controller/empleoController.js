const express = require('express');
const router = express.Router();
const Empleo = require('../models/empleoModel');

// Create
exports.createEmpleo = async (req, res) => {
    try {
        let empleo = new Empleo(req.body);

        await empleo.save();
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor.');
    }
};

// Read
exports.getEmpleos = async (req, res) => {
    try {
        const empleo = await Empleo.find();
        res.json(empleo);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor.');
    }
};

exports.getEmpleo = async (req, res) => {

    try {

        let empleo = await Empleo.findById(req.params.idempleo);

        if(!empleo){
            res.status(404).json({msg:'Empleo no encontrado, pruebe con otro empleo.'})
        }

        res.json(empleo);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor.');
    }
}
// Update
exports.updateEmpleo = async (req, res) => {
    try {
        const { puesto, descripcion, company, ubicacion, fecha } = req.body;
        let empleo = await Empleo.findById(req.params.idempleo);

        if (!empleo) {
            res.status(404).json({ msg: 'Empleo no encontrado, pruebe con otro empleo.' });
        }

        empleo.puesto = puesto;
        empleo.descripcion = descripcion;
        empleo.company = company;
        empleo.ubicacion = ubicacion;
        empleo.fecha = fecha;

        empleo = await Empleo.findOneAndUpdate({_idempleo : req.params.idempleo}, empleo, {new:true})
        res.json(empleo);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};

// Delete
exports.deleteEmpleo = async (req, res) => {
    try {
        let empleo = await Empleo.findByIdAndDelete(req.params.idempleo);

        if (!empleo) {
            res.status(404).json({ msg: 'Empleo no encontrado, pruebe con otro empleo.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};




const express = require('express');
const router = express.Router();
const Empleo = require('../models/empleoModel');

//Insertar

function crear(req, res) {
    const { titulo, descripcion, company, ubicacion, fecha } = req.body;

    const empleo = new Empleo({
        titulo,
        descripcion,
        company,
        ubicacion,
        fecha
    });

    empleo.save()
        .then(() => res.redirect('/api/'))
        .catch(error => res.status(500).send({ error }));
}

function visualizar(req, res) {
    Empleo.find({})
        .then(empleos => {
            if (empleos.length) {
                return res.render('index', { Empleo: empleos });
            }
            return res.status(204).send({ message: 'NO CONTENT' });
        })
        .catch(error => res.status(500).send({ error }));
}

function editar(req, res) {
    const idempleo = req.params.id; 
    const { titulo, descripcion, company, ubicacion, fecha } = req.body;

    Empleo.findByIdAndUpdate(idempleo, {
        titulo,
        descripcion,
        company,
        ubicacion,
        fecha
    })
        .then(() => res.redirect(`/api/${idempleo}`))
        .catch(error => res.status(500).send({ error }));
}

function eliminar(req, res) {
    const idempleo = req.params.idempleo;

    Empleo.findByIdAndDelete(idempleo)
        .then(() => res.redirect('/api/'))
        .catch(error => res.status(500).send({ error }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};


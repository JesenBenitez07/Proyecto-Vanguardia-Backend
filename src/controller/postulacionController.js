const express = require('express');
const Postulacion = require('../models/postulacionModel');

// Insertar una nueva postulación
function crear(req, res) {
    const { nombre, email, puesto, experiencia, fecha } = req.body;

    const postulacion = new Postulacion({
        nombre,
        email,
        puesto,
        experiencia,
        fecha
    });

    postulacion.save()
        .then(() => res.redirect('/api/'))
        .catch(error => res.status(500).send({ error }));
}

// Mostrar todas las postulaciones
function visualizar(req, res) {
    Postulacion.find({})
        .then(postulaciones => {
            if (postulaciones.length) {
                return res.render('index', { postulaciones });
            }
            return res.status(204).send({ message: 'NO CONTENT' });
        })
        .catch(error => res.status(500).send({ error }));
}

// Editar una postulación por ID
function editar(req, res) {
    const idpostulacion = req.params.idpostulacion;
    const { nombre, email, puesto, experiencia, fecha } = req.body;

    Postulacion.findByIdAndUpdate(idpostulacion, {
        nombre,
        email,
        puesto,
        experiencia,
        fecha
    })
        .then(() => res.redirect('/api/' + idpostulacion))
        .catch(error => res.status(500).send({ error }));
}

// Eliminar una postulación por ID
function eliminar(req, res) {
    const idpostulacion = req.params.idpostulacion;

    Postulacion.findByIdAndDelete(idpostulacion)
        .then(() => res.redirect('/api/'))
        .catch(error => res.status(500).send({ error }));
}

module.exports = {
    visualizar,
    crear,
    editar,
    eliminar
};


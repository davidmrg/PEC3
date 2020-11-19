// index controlador de rutas

const express = require('express');
var router = express.Router();
// por si queremos usar el ejercicio de la tabla de multiplicar, línea 87
// const fs = require ('fs');


// configurar callback (async / await) para controlar ruta /
router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/descripcion', async (req, res) => {
    res.render('descripcion');
});

router.get('/tabla', async (req, res) => {
    res.render('tabla');
});

router.get('/modelo', async (req, res) => {
    res.render('modelo');
});

router.get('/diseno', async (req, res) => {
    res.render('diseno');
});


module.exports = router;


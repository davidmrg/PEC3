// index controlador de rutas

const express = require('express');
var router = express.Router();

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


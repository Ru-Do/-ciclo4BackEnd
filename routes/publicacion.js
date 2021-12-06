//rutas para usuarios
const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacionController');

//api/user
router.post('/', publicacionController.crearPublicacion);
router.get('/', publicacionController.obtenerPublicaciones);
router.put('/:id', publicacionController.actualizarPublicacion);
router.get('/:id', publicacionController.obtenerPublicacion);
router.delete('/:id', publicacionController.borrarPublicacion);

module.exports = router;
//rutas para usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/user
router.post('/', userController.crearUser);
router.get('/', userController.obtenerUsers);
router.put('/:id', userController.actualizarUser);
router.get('/:id', userController.obtenerUser);
router.delete('/:id', userController.borrarUser);
router.post('/login', userController.probarLogin);

module.exports = router;
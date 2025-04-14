const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

// Rutas para clientes
router.post('/clientes', clienteController.crearCliente);
router.get('/clientes', clienteController.obtenerClientes);
router.get('/clientes/:id', clienteController.obtenerClientePorId);
router.put('/clientes/:id', clienteController.actualizarCliente);
router.delete('/clientes/:id', clienteController.eliminarCliente);

module.exports = router;

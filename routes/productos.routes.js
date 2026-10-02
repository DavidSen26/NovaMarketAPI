
const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productos.controller');

// Consultar todos los productos
router.get('/', productosController.listarProductos);

// Consultar un producto por ID
router.get('/:id', productosController.obtenerProducto);

// Registrar un producto
router.post('/', productosController.crearProducto);

// Actualizar un producto
router.put('/:id', productosController.actualizarProducto);

// Eliminar un producto
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;

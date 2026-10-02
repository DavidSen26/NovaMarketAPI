
const pool = require('../config/db');

// GET: Consultar todos los productos
const listarProductos = async (req, res, next) => {
    try {
        const [productos] = await pool.query(
            'SELECT * FROM productos ORDER BY id_producto DESC'
        );

        res.status(200).json({
            total: productos.length,
            productos
        });
    } catch (error) {
        next(error);
    }
};

// GET: Consultar un producto por su ID
const obtenerProducto = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensaje: 'El ID del producto debe ser un entero positivo.'
            });
        }

        const [productos] = await pool.execute(
            'SELECT * FROM productos WHERE id_producto = ?',
            [id]
        );

        if (productos.length === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado.'
            });
        }

        res.status(200).json(productos[0]);
    } catch (error) {
        next(error);
    }
};

// POST: Registrar un producto
const crearProducto = async (req, res, next) => {
    try {
        const {
            nombre_producto,
            descripcion,
            precio,
            stock,
            imagen,
            id_categoria,
            id_promocion
        } = req.body;

        if (
            typeof nombre_producto !== 'string' ||
            nombre_producto.trim() === ''
        ) {
            return res.status(400).json({
                mensaje: 'El nombre del producto es obligatorio.'
            });
        }

        if (
            precio === undefined ||
            precio === null ||
            precio === '' ||
            !Number.isFinite(Number(precio)) ||
            Number(precio) < 0
        ) {
            return res.status(400).json({
                mensaje: 'El precio debe ser un número mayor o igual a cero.'
            });
        }

        if (
            stock === undefined ||
            stock === null ||
            stock === '' ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0
        ) {
            return res.status(400).json({
                mensaje: 'El stock debe ser un entero mayor o igual a cero.'
            });
        }

        const [resultado] = await pool.execute(
            `INSERT INTO productos
            (nombre_producto, descripcion, precio, stock, imagen,
             id_categoria, id_promocion)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                nombre_producto.trim(),
                descripcion ?? null,
                Number(precio),
                Number(stock),
                imagen ?? null,
                id_categoria || null,
                id_promocion || null
            ]
        );

        res.status(201).json({
            mensaje: 'Producto registrado correctamente.',
            id_producto: resultado.insertId
        });
    } catch (error) {
        next(error);
    }
};

// PUT: Actualizar un producto existente
const actualizarProducto = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensaje: 'El ID del producto debe ser un entero positivo.'
            });
        }

        const {
            nombre_producto,
            descripcion,
            precio,
            stock,
            imagen,
            id_categoria,
            id_promocion
        } = req.body;

        if (
            typeof nombre_producto !== 'string' ||
            nombre_producto.trim() === ''
        ) {
            return res.status(400).json({
                mensaje: 'El nombre del producto es obligatorio.'
            });
        }

        if (
            precio === undefined ||
            precio === null ||
            precio === '' ||
            !Number.isFinite(Number(precio)) ||
            Number(precio) < 0
        ) {
            return res.status(400).json({
                mensaje: 'El precio debe ser un número mayor o igual a cero.'
            });
        }

        if (
            stock === undefined ||
            stock === null ||
            stock === '' ||
            !Number.isInteger(Number(stock)) ||
            Number(stock) < 0
        ) {
            return res.status(400).json({
                mensaje: 'El stock debe ser un entero mayor o igual a cero.'
            });
        }

        const [resultado] = await pool.execute(
            `UPDATE productos
             SET nombre_producto = ?,
                 descripcion = ?,
                 precio = ?,
                 stock = ?,
                 imagen = ?,
                 id_categoria = ?,
                 id_promocion = ?
             WHERE id_producto = ?`,
            [
                nombre_producto.trim(),
                descripcion ?? null,
                Number(precio),
                Number(stock),
                imagen ?? null,
                id_categoria || null,
                id_promocion || null,
                id
            ]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado.'
            });
        }

        res.status(200).json({
            mensaje: 'Producto actualizado correctamente.'
        });
    } catch (error) {
        next(error);
    }
};

// DELETE: Eliminar un producto
const eliminarProducto = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensaje: 'El ID del producto debe ser un entero positivo.'
            });
        }

        const [resultado] = await pool.execute(
            'DELETE FROM productos WHERE id_producto = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado.'
            });
        }

        res.status(200).json({
            mensaje: 'Producto eliminado correctamente.'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    listarProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

const productosRoutes = require('./routes/productos.routes');

// Configuracion de la API
app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API REST de NovaMarket',
        estado: 'Servidor funcionando'
    });
});

// Verificar conexion con MySQL
app.get('/api/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');

        res.json({
            estado: 'OK',
            mensaje: 'API conectada correctamente a MySQL'
        });
    } catch (error) {
        console.error('Error de conexion a MySQL:', error.message);

        res.status(500).json({
            estado: 'ERROR',
            mensaje: 'No se pudo conectar con la base de datos'
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(
        `NovaMarketAPI funcionando en http://localhost:${PORT}`
    );
});

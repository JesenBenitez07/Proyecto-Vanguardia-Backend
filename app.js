const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/authRoutes');
const { requireAuth } = require('./src/Middleware/authMiddleware');

const app = express();

// Conexión a la base de datos
const url = 'mongodb://127.0.0.1:27017/ServicioSolidario';

mongoose.connect(url)
.then(()=> console.log('Hemos llegado a MongoDB...!'))
.catch((error)=> console.log('Error en:' + error))

// Middleware
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Ruta protegida
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: 'Ruta protegida' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor Corriendo en el Puerto ${PORT}`));


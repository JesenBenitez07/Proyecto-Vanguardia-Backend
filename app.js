const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/authRoutes');
const { requireAuth } = require('./src/Middleware/authMiddleware');

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/ServicioSolidario', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createUser: true,
    getUserByUsername: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);


/*
// Rutas
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const empleoRoutes = require('./src/routes/empleoRoutes');
const postulacionRoutes = require('./src/routes/postulacionRoutes');

app.use('/login', authRoutes);
app.use('/register', userRoutes);
app.use('/empleo', empleoRoutes);
app.use('/postulaciones', postulacionRoutes);
*/
// Ruta protegida
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: 'Ruta protegida' });
})

const PORT = 8080; // Puerto predeterminado si no se proporciona uno en .env
app.listen(PORT, () => console.log(`Servidor Corriendo en el Puerto ${PORT}`));






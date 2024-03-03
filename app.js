const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');

const app = express();
//const empleoRoutes = require('./src/routes/empleoRoutes');


app.use(express.json());
app.use(cors())


// Usar las rutas
app.use('/api/empleos', require('./src/routes/empleoRoutes'));
app.use('/api/postulaciones', require('./src/routes/postulacionRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/loginUser', require('./src/routes/userRoutes'));
// Conexión a la base de datos
const db = require('./database');

app.set('view engine', 'ejs');



const PORT = 8080; 
app.listen(PORT, () => console.log(`Servidor Corriendo en el Puerto ${PORT}`));






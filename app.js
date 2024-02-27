const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();
const empleoRoutes = require('./src/routes/empleoRoutes');


app.use(express.json());
//app.use(routes);

// Usar las rutas
app.use('/api', empleoRoutes);

// Conexión a la base de datos
const db = require('./database');

app.set('view engine', 'ejs');



const PORT = 8080; 
app.listen(PORT, () => console.log(`Servidor Corriendo en el Puerto ${PORT}`));






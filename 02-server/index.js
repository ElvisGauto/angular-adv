require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// configurar cors
app.use(cors());

// Lectura  y parseo del body
app.use( express.json() );

// base de datos
dbConnection();


// rutas
app.use('/api/users', require('./routes/users.route'));
app.use('/api/login', require('./routes/auth.route'));


app.listen( process.env.PORT, () => {
    console.log('servidor corriendo  en puerto '+ process.env.PORT);
} );
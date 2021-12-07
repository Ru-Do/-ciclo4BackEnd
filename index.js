const express = require('express');
const conectarDB = require ('./config/db');
const cors = require('cors');
const bodyparser = require('body-parser');

//creando el servidor

const app = express();

//conectar base de datos

conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/user', require('./routes/user'));
app.use('/api/publicacion', require('./routes/publicacion'));

//puerto de correr
app.listen(4000, () => {
  console.log('El servidor esta corriendo');
})

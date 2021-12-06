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
/*
{
  "ciudad": "Montería",
  "contrasena": "rudo123",
  "correoElectronico": "rudo@fundacion.com",
  "direccion": "santa monica calle 20",
  "nombreOrganizacion": "Fundaciónrudo",
  "numeroDocumento": "90001025",
  "numeroTelefono1": "3002225544",
  "numeroTelefono2": "",
  "pais": "Colombia",
  "primerApellido": "",
  "primerNombre": "",
  "sector": "Deportes",
  "segundoApellido": "",
  "segundoNombre": "",
  "tipoDocumento": "NIT",
  "tipoUsuario": "Fundación"
}
*/
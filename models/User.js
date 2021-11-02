const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    ciudad:{
      type: String,
      required: true,
    },
    contrasena:{
      type: String,
      required: true,
    },
    correoElectronico:{
      type: String,
      required: true,
    },
    direccion:{
      type: String,
      required: true,
    },
    nombreOrganizacion:{
      type: String,
      required: false,
    },
    numeroDocumento:{
      type: Number,
      required: true,
    },
    numeroTelefono1: {
      type: Number,
      required: true,
    },
    numeroTelefono2: {
      type: Number,
      required: false,
    },
    pais: {
      type: String,
      required: true,
    },
    primerApellido: {
      type: String,
      required: false,
    },
    primerNombre:{
      type: String,
      required: false,
    },
    sector: {
      type: String,
      required: true,
    },
    segundoApellido: {
      type: String,
      required: false,
    },
    segundoNombre: {
      type: String,
      required: false,
    },
    tipoDocumento: {
      type: String,
      required: true,
    },
    tipoUsuario: {
      type: String,
      required: true,
    },
    fechaCreacion: {
      type: Date,
      default: Date.now(),
    }
})

module.exports = mongoose.model('User', UserSchema);
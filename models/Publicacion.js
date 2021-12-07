const mongoose = require('mongoose');

const PublicacionSchema = mongoose.Schema({

    sector:{
      type: String,
      required: false,
    },
    fechaInicio: {
      type: String,
      required: false,
    },
    fechaFin: {
      type: String,
      required: false,
    },
    descripcion:{
      type: String,
      required: false,
    },
    idDueno:{
      type: String,
      required: true,
    },
    nombreDueno:{
      type: String,
      required: true,
    },
    tipoDona:{
      type: String,
      required: false,
    },
    nivelAcademico: {
      type: String,
      required: false,
    },
    fechaCreacion: {
      type: Date,
      default: Date.now(),
    }
})

module.exports = mongoose.model('Publicacion', PublicacionSchema);
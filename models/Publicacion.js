const mongoose = require('mongoose');

const PublicacionSchema = mongoose.Schema({

    sector:{
      type: String,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    descripcion:{
      type: String,
      required: true,
    },
    idDueno:{
      type: String,
      required: true,
    },
    tipoDona:{
      type: String,
      required: true,
    },
    nivelAcademico: {
      type: String,
      required: true,
    },
    fechaCreacion: {
      type: Date,
      default: Date.now(),
    }
})

module.exports = mongoose.model('Publicacion', PublicacionSchema);
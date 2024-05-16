const mongoose = require ('mongoose');

// este  modelo que vamos a hacer debe ser  igual a lo que tenga la BD
const clienteSchema = mongoose.Schema({
nombres: {
    type: String,
    required: true
},
apellidos: {
    type: String,
    required: true
},
cedula: {
    type: Number,
    required: true
},
correo: {
    type: String,
    required: true
},
telefono: {
    type: Number,
    required: true
},
direccion: {
    type: String,
    required: true
},

},{versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema );
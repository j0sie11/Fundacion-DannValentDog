const mongoose = require ('mongoose');

const Contacto = new mongoose.Schema({

    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    municipio: {type: String, required: true},
    mensaje: {type: String}

});

module.exports = mongoose.model("Contacto Usuarios", Contacto);
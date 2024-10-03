const mongoose = require("mongoose");

const AdoptarSchema = new mongoose.Schema({
    
    img: {
        type: String,
        required: true
    },
    
    video1: {
            type: String,
            required: false
    },

    nombre: {
            type: String,
            required: true
    },

    edad: {
            type: Number,
            required: true
    },
    
    descripcion: {
            type: String,
            required: true
    }

});

module.exports = mongoose.model('Adopciones', AdoptarSchema);
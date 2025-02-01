const mongoose = require("mongoose");

const GaleriaSchema = new mongoose.Schema({
    
        img2: {
                type: String,
                required: false
        },

        video: {
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

module.exports = mongoose.model('Galeria', GaleriaSchema);
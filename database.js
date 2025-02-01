

const mongoose = require('mongoose');

// URI para conectar a la base de datos Cluser en Mongodb Atlas
const uri = "mongodb+srv://gjet3110:josender@cluster1.bi83w.mongodb.net/cluster1?retryWrites=true&w=majority&appName=Cluster1";

// Conectar a MongoDB usando Mongoose
mongoose.connect(uri)
if(mongoose.connect) {
    console.log("Conexión a MongoDB Exitosa");
    // Se importan los modelos como solucion al tiempo de respuesta
    require('./Backend/1_Adoptar/modelAdoptar');
    require('./Backend/2_Contacto/modelContacto');

}else{
    console.error("Error al conectar a MongoDB:", err);
};






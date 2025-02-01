//Librerias Importadas
const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const database = require('./database');
//const DB = require ('./Backend/DBLocal')

//Librerias en Uso
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'Frontend/Estilos')));
app.use('/uploads' ,express.static(path.join(__dirname, 'uploads')));
app.use('/uploads/videos' ,express.static(path.join(__dirname, 'uploads')));

//Rutas
const router = require ('./Backend/1_Adoptar/Adoptar');
const Contact = require ('./Backend/2_Contacto/Contacto');
const login = require ('./Backend/3_LoginPublicacion/login');
const Galeria = require ('./Backend/4_Galeria/GaleriaDogs');
app.use(router);
app.use(Contact);
app.use(login);
app.use(Galeria);

//Paginas en html mostradas desde el servidor
//Inicio
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/1_Inicio.html"))
});

//Ojetivos
app.get("/Objetivos", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/2_Objetivos.html"))
});

//Apoyar
app.get("/Apoyar", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/3_Apoyar.html"))
});

//Galeria
app.get("/Galeria", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/4_Galeria.html"))
});

//Contacto
app.get("/Contacto", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/5_Contacto.html"))
});

//login Admin
app.get("/log", (req, res)=>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/6_login.html"))
})

//Duepues de loguearse se dirige e Publicar Adopciones
app.get("/PublicarA", (req, res) =>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/7_PublicarA.html"))
});

//Album
app.get("/Album", (req, res)=>{
    res.sendFile(path.join(__dirname + "/Frontend/Paginas/8_Album.html"))
})


//Servidor corriendo por el puerto 2000
const PORT = process.env.PORT || 2000
app.listen(PORT, (req, res) =>{console.log("servidor encendido en el puerto "+ PORT)})
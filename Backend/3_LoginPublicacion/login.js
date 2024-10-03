const { Router } = require('express');

const router = Router();

const usuarioRegistrado ={
    nombre: "dannvalent",
    contraseña: "valent22"
}

router.post("/login", async (req, res) =>{
    const {nombre, contraseña} = req.body
    if(nombre === usuarioRegistrado.nombre && contraseña === usuarioRegistrado.contraseña){
        res.redirect("/PublicarA"); //redirect para que al logearse el usuario se diriga a la pagina de inicio
    }else{
        res.send("<h1>USUARIO INCORRECTO</h1>" + "<br>" + "<button "+"onclick="+"location.href='/log'"+">"+"VOLVER"+"</button>")
    }
});

module.exports = router;
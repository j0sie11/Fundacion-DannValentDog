const {Router} = require ('express');
const Contacto = require ('./modelContacto');


const router = Router();

router.post("/contacto", async (req, res) =>{

    const newContact = new Contacto({
        nombre: req.body.nombre,
        correo: req.body.correo,
        municipio: req.body.municipio,
        mensaje: req.body.mensaje
    });

    const saveContact = await newContact.save();
    console.log(saveContact);
    res.redirect('/Contacto');

})

module.exports = router;
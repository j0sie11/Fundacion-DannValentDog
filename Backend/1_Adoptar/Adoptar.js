const {Router} = require ('express');
const AdoptarSchema = require ('./modelAdoptar');
const multer = require ('multer');
const fs = require ('node:fs');

const upload = multer({dest: "uploads/"});

const router = Router();

router.post("/guardar", upload.single('img') , async (req, res) =>{
    const image = saveImage(req.file);

    const newDog = AdoptarSchema({
        img: image,
        nombre: req.body.nombre,
        edad: req.body.edad,
        descripcion: req.body.descripcion
    })

    const saveDog = await newDog.save();

    console.log(saveDog)
    res.redirect("/Album")
    
});

function saveImage(file){
    const newImagePath = `uploads/${file.originalname}`;
    fs.renameSync(file.path, newImagePath);
    return newImagePath;
};


router.get("/EnAdopciones", async (req, res)=>{

    const verAdop = await AdoptarSchema.find()
    res.send(verAdop);

});



module.exports = router;
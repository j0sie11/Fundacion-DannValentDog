const {Router} = require ('express');
const GaleriaSchema = require ('./modelGaleria');
const multer = require ('multer');
const fs = require ('node:fs');

const upload = multer({dest: "uploads/"});

const router = Router();


/*--------------------Servira para guardar las fotos-------------------*/

router.post("/guardar2", upload.single('img2') , async (req, res) =>{
    const image = saveImage(req.file);

    const newDog = GaleriaSchema({
        img2: image,
        nombre: req.body.nombre,
        edad: req.body.edad,
        descripcion: req.body.descripcion
    })

    const saveDog = await newDog.save();

    console.log(saveDog)
    res.redirect("/Galeria");
    
});

function saveImage(file){
    const newImagePath = `uploads/${file.originalname}`;
    fs.renameSync(file.path, newImagePath);
    return newImagePath;
};

/*--------------------Servira para guardar los Videos en Galeria-------------------*/

const uploadVideo = multer({dest: "uploads/videos/"});

router.post("/guardarVideo", uploadVideo.single('video'), async (req, res) =>{

    const video = saveVideo(req.file);

    const newDogVideo = GaleriaSchema({
        video: video,
        nombre: req.body.nombre,
        edad: req.body.edad,
        descripcion: req.body.descripcion
    });

    const saveDogVideo = await newDogVideo.save();
    console.log(saveDogVideo);
    res.redirect("/Galeria");
})


function saveVideo(file){
    const newVideoPath = `uploads/videos/${file.originalname}`;
    fs.renameSync(file.path, newVideoPath);
    return newVideoPath;
}



router.get("/GaleriaDogs", async (req, res)=>{

    const verAdop = await GaleriaSchema.find()
    res.send(verAdop);

});



module.exports = router;
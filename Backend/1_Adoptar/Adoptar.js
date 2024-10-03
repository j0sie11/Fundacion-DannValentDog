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


/*--------------------Servira para guardar los Videos en ALBUM-------------------

const uploadVideo = multer({dest: "uploads/videos/"});

router.post("/guardarVidAlbum", uploadVideo.single('video1'), async (req, res) =>{

    const video1 = saveVideo(req.file);

    const newDogVideo = AdoptarSchema({
        video1: video1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        descripcion: req.body.descripcion
    });

    const saveDogVideo = await newDogVideo.save();
    console.log(saveDogVideo);
    res.redirect("/Album");
})


function saveVideo(file){
    const newVideoPath = `uploads/videos/${file.originalname}`;
    fs.renameSync(file.path, newVideoPath);
    return newVideoPath;
}


*/



router.get("/EnAdopciones", async (req, res)=>{

    const verAdop = await AdoptarSchema.find()
    res.send(verAdop);

});



module.exports = router;
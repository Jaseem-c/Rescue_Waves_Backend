// import multer
const multer=require("multer")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const filename=`image-${file.originalname}`
        cb(null,filename)
    }
})

// filter- to control uploading datas
const fileFilter=(req,file,cb)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg'|| file.mimetype=='image/jpeg')
    {
        cb(null,true)
    }
    else{
        cb(null,false)
        return cb(new Error('only allows jpg,jpeg and png files'))
    }
}

const multerConfig=multer({
    storage,
    fileFilter,
})

module.exports=multerConfig
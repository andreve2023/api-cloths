const multer = require('multer')
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const {config} = require("../config/config");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key:  config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'productos',
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Solo se permiten imágenes.'));
        }
        cb(null, true);
    },
    limits: { fileSize: 1024 * 1024 * 10 }
})

module.exports = upload;

//const express = require('express');
const router = require('express').Router();
const multer = require('multer');

//Required Controller 
const fileController = require('../Controllers/Files/Post');



//Multer Config
const maxSize =  1024 * 1024 * 5; //1MB


const storage = multer.diskStorage({

    destination: (req, file, cb) => { //Local onde será armazenado

        cb(null, 'Upar/')

    },

    filename: (req, file, cb) => { //Nome do Arquivo

        cb(null, file.originalname);

    }

});





 const configMulter = multer({

    storage: storage,

    fileFilter: (req, file, cb) => {

        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {

            cb(null, true);

        }else {

            cb(null, false);
            return cb(new Error('Formato de Imagem não suportado. '));


        }       
    },

    limits: { fileSize: maxSize }

});






//Routes For Posts Control
router.post('/inserir',  configMulter.single('file'), fileController.post);




module.exports = router;




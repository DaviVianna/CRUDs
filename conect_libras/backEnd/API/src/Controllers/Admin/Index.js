const express = require('express');
const router = require('express').Router();
router.use(express.json());
const multer = require('multer');
//const { verifyJWT } = require('../Login/Logar');




//Required Methods in Administrater
const adminPosts = require('./Post');
const adminGet   = require('./Get');
const adminAlter = require('./Alter');
const adminDisabled =  require('./Disabled');



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

});




//Routes For Admin Control
router.post('/cadastro', configMulter.single('file'), adminPosts.post);
router.get('/consultar', adminGet.get);
router.get('/consultar/:id', adminGet.getById);

router.put('/alterar/:id', configMulter.single('file'), adminAlter.put);
router.delete('/excluir/:id', adminDisabled.disabled);


module.exports = router;


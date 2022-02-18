const express = require('express');
const router = express.Router();
router.use(express.json());
const multer = require('multer');
///const multerConfig = require('../../../multerConfig');


//Required Methods in Users
const operaPosts        = require('./Post');
const operaGet          = require('./Get');
const operaGetById      = require('./GetById');
const operaAlter        = require('./Alter');
const operaDelete       = require('./Disabled');



//Multer Config


const storage = multer.diskStorage({

    destination: (req, file, cb) => { //Local onde será armazenado

        cb(null, 'Upar/')

    },

    filename: (req, file, cb) => { //Nome do Arquivo

        cb(null, file.originalname);

    }

});


let maxSize = 2 * 1024 * 1024;

const configMulter = multer({

    storage: storage,

});






//Routes For Operators Control
router.post('/cadastro',           configMulter.single('file'), operaPosts.routes);
router.get('/consultar',           operaGet.get);
router.get('/consultar/:id',      operaGetById.GetById);
router.put('/alterar/:id',        configMulter.single('file'), operaAlter.routes);
router.delete('/excluir/:id',      operaDelete.disabled);

module.exports = router;


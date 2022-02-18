const express = require('express');
const router = require('express').Router();
router.use(express.json());
const multer = require('multer');
const multerConfig = require('../../Config/Multer');

//Required Methods in Users
const ClientePost       = require('./Post');
const ClienteGet        = require('./Get');
const clinteGetByCnpj   = require('./GetByCnpj');
const ClienteAlter      = require('./Alter');
const ClienteDisabled   =  require('./Disabled');



//Routes For Cliente Control
router.post('/cadastro/:cnpj',       multer(multerConfig).single('file'), ClientePost.post);
router.get('/consultar',            ClienteGet.get);
router.get('/consultar/:cnpj',      clinteGetByCnpj.getByCnpj);
router.put('/alterar/:id',          multer(multerConfig).single('file'), ClienteAlter.put);
router.delete('/excluir/:id',       ClienteDisabled.disabled);


module.exports = router; 
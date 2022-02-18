const express = require('express');
const router = require('express').Router();
//const { verifyJWT } = require('../Controllers/Login/Operators');
//Required Controller in Operators
const OperaController = require('../Controllers/Operators/index');


//Routes For User Control
router.post('/cadastro',            OperaController);
router.get('/consultar',            OperaController);
router.get('/consultar/:id',        OperaController);
router.put('/alterar/:id',          OperaController);
router.delete('/excluir/:id',       OperaController);


module.exports =  router;


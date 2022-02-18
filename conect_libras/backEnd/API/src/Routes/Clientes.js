const express = require('express');
const router = require('express').Router();

//Required Controller in User
const userController = require('../Controllers/Clientes/index');



//Routes For User Control
router.post('/cadastro/:cnpj',  userController);
router.get('/consultar',        userController);
router.get('/consultar/:cnpj',   userController);
router.put('/alterar/:id',      userController);
router.delete('/excluir/:id',   userController);


module.exports = router;


const express = require('express');
const router = require('express').Router();

//Required Controller in User
const adminController = require('../Controllers/Admin/Index');


//Routes For User Control
router.post('/cadastro', adminController);
router.get('/consultar', adminController);
router.get('/consultar/:id', adminController);
router.put('/alterar/:id', adminController);
router.delete('/excluir/:id', adminController);


module.exports = router;



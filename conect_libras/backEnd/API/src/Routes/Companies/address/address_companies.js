const express = require('express');
const router = require('express').Router();

//Required Controller in User
const addressController = require('../../../Controllers/Companies/Address/index');


//Routes For User Control
router.post('/cadastro',         addressController);
router.get('/consultar',        addressController);
router.put('/alterar/:id',      addressController);


module.exports = router;


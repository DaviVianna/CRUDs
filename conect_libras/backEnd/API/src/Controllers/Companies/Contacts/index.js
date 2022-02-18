const express = require('express');
const router = require('express').Router();
router.use(express.json());

//Required Methods in Users
const contactPosts = require('./Post');
const contactGet   = require('./Get');
const contactAlter = require('./Alter');
const contactGetById = require('./GetById');


//Routes For User Control
router.post('/cadastro',    contactPosts.post);
router.get('/consultar',    contactGet.get);
router.get('/consultar/:cnpj', contactGetById.getById)
router.put('/alterar/:cnpj',  contactAlter.put);



module.exports = router;


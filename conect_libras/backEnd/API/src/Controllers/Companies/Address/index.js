const express = require('express');
const router = require('express').Router();
router.use(express.json());

//Required Methods in Users
const addressPosts = require('./Post');
const addressGet   = require('./Get');
const addressAlter = require('./Alter');



//Routes For Address Control
router.post('/cadastro',         addressPosts.post);
router.get('/consultar',        addressGet.get);
router.put('/alterar/:id',      addressAlter.put);



module.exports = router;


const { compare } = require('bcrypt');
const express = require('express');
const router = require('express').Router();

//Required Controller in User
const CompaniesController = require('../../Controllers/Companies/Companies/index');


//Routes For User Control
router.post('/cadastro',            CompaniesController);
router.get('/consultar',            CompaniesController);
router.get('/consultarCnpj',        CompaniesController);
router.get('/consultar/:cnpj',      CompaniesController);
router.put('/endereco/:cnpj',       CompaniesController);
router.put('/alterar/:cnpj',        CompaniesController);
router.delete('/excluir/:cnpj',     CompaniesController);


module.exports = router;


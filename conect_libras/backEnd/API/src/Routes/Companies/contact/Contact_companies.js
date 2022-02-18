const express = require('express');
const router = require('express').Router();

//Required Controller in User
const ctt_company_Controller = require('../../../Controllers/Companies/Contacts/index');


//Routes For User Control
router.post('/cadastro',        ctt_company_Controller);
router.get('/consultar',        ctt_company_Controller);
router.get('/consultar/:cnpj',    ctt_company_Controller);
router.put('/alterar/:cnpj',      ctt_company_Controller);


module.exports = router;


const express = require('express');
const router = require('express').Router();
router.use(express.json());

//Required Methods in Companies
const postCompanies = require('./Post');
const getCompanies   = require('./Get');
const updateAddress = require('./Update');
const updateCompanies = require('./UpdateCompanie')
const disabledCompanies =  require('./disabled');
const  getCompaniesByCnpj = require('./GetByCnpj');
const getCompanyFindCnpj = require('./GetFindCnpj');



//Routes For Companies Control
router.post('/cadastro',            postCompanies.post);
router.get('/consultar',            getCompanies.get);
router.get('/consultarCnpj',        getCompanyFindCnpj.router);
router.get('/consultar/:cnpj',      getCompaniesByCnpj.router);
router.put('/endereco/:cnpj',       updateAddress.router); //Altera Endereco
router.put('/alterar/:cnpj',        updateCompanies.router); ;//Altera a Empresa
router.delete('/excluir/:cnpj',     disabledCompanies.disabled);



module.exports = router;


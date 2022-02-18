const express = require('express');
const router = require('express').Router();

//Required Controller in Plans
const plansController = require('../Controllers/Plans/Index');


//Routes For Plans Control
router.post('/cadastro',            plansController);
router.get('/consultar',            plansController);
router.get('/consultar/:plano',      plansController);
router.put('/alterar/:plano',       plansController);
router.delete('/excluir/:plano',    plansController);


module.exports = router;


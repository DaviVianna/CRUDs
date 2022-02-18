const express = require('express');
const router = require('express').Router();
router.use(express.json());

//Required Methods in Plans
const insertPlans       = require('./Post');
const getPlans          = require('./Get');
const GetByPlano        = require('./GetByPlano');
const alterPlans        = require('./Alter');
const deletePlans       = require('./Delete');



//Routes For User Control
router.post('/cadastro',            insertPlans.post);
router.get('/consultar',            getPlans.get);
router.get('consultar/:plano',      GetByPlano.GetByPlano);
router.put('/alterar/:plano',       alterPlans.put);
router.delete('/excluir/:plano',    deletePlans.del);


module.exports = router;


//required Model 
const db = require('../models/cadastro');
const express = require('express');
const app = express.Router();
app.use(express.json());




async function post(req, res) {


    const data = {

        name:        req.body.name,
        namespace:   req.body.namespace,
        type:        req.body.type,
        description: req.body.description,
        qapageid:    req.body.qapageid,
        solution:    req.body.solution,
        platform:    req.body.platform

    };

    //instanciando a model 
    await db.cadastraDados(data);
    res.status(201).send({

        codigo: 1,
        msg: 'Cadastrado corretamente.'

    });

    
    
}


module.exports = { post }
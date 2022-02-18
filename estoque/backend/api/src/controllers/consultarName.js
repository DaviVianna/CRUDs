//required Model 
const db = require('../models/consultarName');
const express = require('express');
const app = express();
app.use(express.json());



const post = async (req, res) => {


    const data = {

        name: req.body.name

    }


    //Instanciando a Model 
    const results = await db.consultarName(data);

    if(results.length > 0) {

        res.status(201).send(results);

    }else {

        res.status(400).send({

            codigo: 2, 
            msg: 'Nenhum resultado encontrado.'


        });

    }
} 


module.exports = { post }
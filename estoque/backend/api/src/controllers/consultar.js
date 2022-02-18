//required Model 
const db = require('../models/consulta');
const express = require('express');
const app = express();
app.use(express.json());


const get = async (req, res) => {

    //Instanciando a Model
   const results = await db.buscaDados();

   
   //Verificando se algo foi encontrado
   if(results.length > 0) {

    res.status(201).send(results);

   }else {

    res.status(400).send({

        codigo: 2, 
        msg: 'Nenhum resultado encontrado.'

    });

   }

}


module.exports = { get }
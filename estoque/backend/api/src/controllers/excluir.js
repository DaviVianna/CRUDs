//required Model 
const db = require('../models/excluir');
const express = require('express');
const app = express();
app.use(express.json());



const exclude = async (req, res) => {


    const data = {

        id: req.params.id

    }

    console.log(data);
    

    //Instanciando a Model 
    await db.excluirDados(data);


    res.status(201).send({

        codigo: 1, 
        msg: 'Dado excluído corretamente.'

    });

} 


module.exports = { exclude }
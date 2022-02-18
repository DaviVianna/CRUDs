const express = require('express');

//Required Model
const db = require("../../Models/Plans/Del");


//Disabled by ID
const del = async (req, res) => {


    const data = {

        plano: req.params.plano
        
    }


    //Instânciando a Model
    await db.delPlans(data);


    res.status(201).send({
        
        codigo: 1,
        msg: 'Plano deletado corretamente.'
    
    });

    
}


module.exports = { del }


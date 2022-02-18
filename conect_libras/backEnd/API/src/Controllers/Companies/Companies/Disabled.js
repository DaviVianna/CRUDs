const express = require('express');

//Required Model
const db = require("../../../Models/Companies/Companies/Disabled");

//Desativa pelo ID
const disabled = async (req, res) => {

    const data = {

        cnpj: req.params.cnpj
    }


    //Instânciando a Model
    await db.disabledCompanies(data);


    res.status(201).send({
        
        codigo: 1,
        msg: 'Empresa excluída corretamente'
    
    
    });


    
    
}


module.exports = { disabled }


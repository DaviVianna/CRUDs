const express = require('express');


const deleteOpera = require("../../Models/Operators/Disabled");

//Desativa pelo ID
const disabled = async (req, res) => {

    const data = {

        id: req.params.id

    }


    await deleteOpera.operaDisabled(data);

    res.status(201).send({
        
        codigo: 1,
        msg: 'Operador (A) Deletado (A) corretamente'
    
    
    });

    
}


module.exports = { disabled }


const express = require('express');

//Required Model
const db = require("../../Models/Admin/Disabled");




//Desativa pelo ID
const disabled = async (req, res) => {

    const data = {

        id: req.params.id
    }

    //instancio a Model
    await db.admDisabled(data);

    res.status(200).send({
        
        codigo: 1,
        msg: 'Conta deletada corretamente.'
    
    });

    
}


module.exports = { disabled }


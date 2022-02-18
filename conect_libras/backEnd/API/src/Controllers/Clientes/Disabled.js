const db = require("../../Models/Clientes/Disabled");

//Desativa pelo ID
const disabled = async (req, res) => {

    const data = {

        id: req.params.id
    }

    //Instancio a Model
    await db.deleteClientes(data);


    res.status(200).send({
        
        codigo: 1,
        msg: 'Cliente deletado corretamente.'
    
    
    });

    
}


module.exports = { disabled }


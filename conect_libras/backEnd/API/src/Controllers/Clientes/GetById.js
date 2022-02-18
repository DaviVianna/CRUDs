//Required Model
const db = require("../../Models/Clientes/GetById");

    //Method
    const GetById = async (req, res) => {

        const data = {

            id: req.params.id

        }


        const clientes = await db.getClients(data);

        res.status(200).send(clientes);

    }
  


    module.exports = { GetById }
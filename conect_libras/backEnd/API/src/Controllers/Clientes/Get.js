//Required Model
const db = require("../../Models/Clientes/Get");

    //Method
    const get = async (req, res) => {

        const users = await db.getClients();

        res.status(200).send(users);

    }
  


    module.exports = { get }
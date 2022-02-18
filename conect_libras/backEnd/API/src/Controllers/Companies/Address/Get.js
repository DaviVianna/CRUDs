
    const db = require("../../../Models/Companies/Address/Get");


    const get = async (req, res) => {

        const address = await db.getAddress();

        res.status(200).send(address);

    }
  


    module.exports = { get }
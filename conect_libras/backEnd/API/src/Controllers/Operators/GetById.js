//Import Model
const db = require('../../Models/Operators/GetById');



const GetById = async (req, res) => {

    const data = {

        id: req.params.id

    }


    //Instancia a Model
    const results = await db.GetById(data);

    res.status(200).send(results);









}

module.exports = { GetById }
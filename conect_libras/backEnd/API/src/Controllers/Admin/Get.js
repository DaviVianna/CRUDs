//required Model
const db = require("../../Models/Admin/Get");





//Buscando TODOS
const get = async (req, res) => {

    const admin = await db.getAdmin();

    res.status(200).send(admin);

}





//Buscando pelo ID
const getById = async (req, res) => {


    const data = {

        id: req.params.id
    }


    const admin = await db.getById(data);

    res.status(200).send(admin);


}



module.exports = { get, getById }
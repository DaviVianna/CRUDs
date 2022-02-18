//required Model
const db = require("../../Models/Operators/Get");


const get = async (req, res) => {

    const operators = await db.getOperators();

    res.status(200).send(operators);

}



module.exports = { get }
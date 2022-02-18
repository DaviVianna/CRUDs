
//Require Model
const db = require("../../Models/Plans/Get");

    //Method
    const get = async (req, res) => {

        const plans = await db.getPlans();

        if(plans.length > 0) {

            res.status(200).send(plans);

        }else {

            res.status(400).send({

                codigo: 2, 
                msg: 'Nenhum plano encontrado.'

            });
        }
        
    }
  


    module.exports = { get }
//Require Model
const db = require("../../Models/Plans/GetByPlanos");

    //Method Get By Id
    const GetByPlano = async (req, res) => {

        const data = {

            plano: req.params.plano

        }

        const getByPlano = await db.getByPlano(data);


        if(getByPlano.length > 0) {

            res.status(200).send(getByPlano);

        }else {

            res.status(400).send({

                codigo: 2, 
                msg: 'Nenhum plano encontrado.'

            });

        }
    }
  

module.exports = { GetByPlano }
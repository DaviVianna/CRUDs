//Required Model 
const db = require('../../Models/Clientes/GetByCnpj');


    //Method
    const getByCnpj = async (req, res) => {

        const data = {

            cnpj: req.params.cnpj

        }

        const results = await db.getClientsByCnpj(data);

        if(results.length > 0) {

            res.status(200).send(results);

        }else {

            res.status(400).send({

                codigo: 2,
                msg: 'Nenhum resultado encontrado.'

            });

        }
     
        
    }
  


    module.exports = { getByCnpj }

    //Required Model
    const db = require("../../../Models/Companies/Contact/GetById");

    //Method 
    const getById = async (req, res) => {

        const data = {

            cnpj: req.params.cnpj

        }


        const contact_companies = await db.getContactsById(data);

        if(contact_companies.length > 0) {

            res.status(200).send(contact_companies);

        }else {

            res.status(400).send({

                codigo: 2,
                msg: 'Contato não encontrado para o CNPJ fornecido.'

            });
               
        }

    }
  
    module.exports = { getById } 
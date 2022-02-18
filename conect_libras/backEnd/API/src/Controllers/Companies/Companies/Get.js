
    const db = require("../../../Models/Companies/Companies/Get.js");


    const get = async (req, res) => {

        const companies = await db.getCompanies();

        if(companies.length > 0) {

            res.status(200).send(companies);

        }else {

            res.status(400).send({

                codigo: 2,
                msg: 'Nenhum resultado encontrado.'

            });

        }

    }
  


    module.exports = { get }
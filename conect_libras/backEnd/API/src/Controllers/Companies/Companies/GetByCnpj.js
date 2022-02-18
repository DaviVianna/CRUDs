const express    = require('express');
const router     = require('express').Router();
//required Model
const db         = require("../../../Models/Companies/Companies/GetByCnpj");


   router.get('/consultar/:cnpj', async (req, res) => {

        const data = {

            cnpj: req.params.cnpj

        }   

        
        
        const companies = await db.getCompanyByCnpj(data);

        if(companies.length > 0) {

            res.status(200).send(companies);

        }else {

            res.status(400).send({

                codigo: 2, 
                msg: 'CNPJ não encontrado.'


            });


        }

       
        

    });
  


    module.exports = { router }
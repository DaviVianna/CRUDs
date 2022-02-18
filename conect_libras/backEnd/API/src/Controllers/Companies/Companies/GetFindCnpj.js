const express    = require('express');
const router     = require('express').Router();
const CNPJ       = require('consulta-cnpj-ws');
const Cnpj       = new CNPJ();



   router.get('/consultarCnpj', async (req, res) => {

        const data = {

            cnpj: req.body.cnpj

        }   

      await Cnpj.consultaCNPJ({cnpj: data.cnpj})

      
        
      .then(response => {

        res.send(response);

      })
      .catch(err => {

        res.send(err);

      }) 
      

    });
   
module.exports = { router }
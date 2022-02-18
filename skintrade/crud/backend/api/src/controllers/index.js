const express   = require('express');
const app       = express();
app.use(express.json());
const router                = require('express').Router();


const loginFile             = require('./login');
const cadastroFile          = require('./cadastro');
const consultarFile         = require('./consultar');
const consultarCamposFile   = require('./ConsultarCampos');
const consultarNameFile     = require('./consultarName');
const alterarFile           = require('./alterar');
const excluirFile           = require('./excluir');


router.post('/login',           loginFile.post);
router.post('/cadastro',        cadastroFile.post);
router.post('/consultarName',   consultarNameFile.post);
router.get('/consultar',        consultarFile.get);
router.get('/consultarCampos',  consultarCamposFile.get); //Consulta campos que se repetem
router.put('/alterar/:id',      alterarFile.put);
router.delete('/excluir/:id',   excluirFile.exclude);


module.exports = router;
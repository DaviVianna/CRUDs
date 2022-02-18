const express = require('express');
const app = express();
app.use(express.json());
const router = require('express').Router();
const controller = require('../controllers/index');

router.post('/cadastro',            controller);
router.post('/consultarName',       controller);
router.post('/login',               controller);
router.get('/consultar',            controller);
router.get('/consultarCampos',      controller); //Consulta campos que se repetem
router.put('/alterar/:id',          controller);
router.delete('/excluir/:id',       controller);


module.exports = router;
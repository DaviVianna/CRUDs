const express = require('express');
const routes = express.Router();
const controllerUser = require('../Controller/Users/usuarioController');


routes.get('/', controllerUser.index);
routes.get('/consulta/:_id', controllerUser.searchId);
routes.post('/cadastre-se', controllerUser.store);
routes.put('/alterar/:_id', controllerUser.updateId);
routes.delete('/excluir/:_id', controllerUser.deleteId);




module.exports = routes;
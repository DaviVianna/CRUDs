const express = require('express');
const router = require('express').Router();

//Required Controller in User
const loginController = require('../Controllers/Login/index');

//Routes For User Control
router.post('/cliente',       loginController);
router.post('/operador',      loginController);
router.post('/Administrador', loginController);
router.post('/logar',         loginController);


module.exports = router;


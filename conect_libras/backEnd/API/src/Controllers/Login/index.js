const express = require('express');
const router = require('express').Router();
router.use(express.json());




//Required Methods in Users
const Users         = require('./users');
const Operators     = require("./Operators");
const Admin         = require("./Admin");
const Login         = require('./Logar');




//Routes For User Control
router.post('/logar',           Login.router);
router.post('/cliente',         Users.authUsers);
router.post('/operador',        Operators.router);
router.post('/administrador',   Admin.authAdmin);




module.exports = router;


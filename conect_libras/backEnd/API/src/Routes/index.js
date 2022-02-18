const express = require('express');
const router = express.Router();


//Individual Required Routes
const clientes                  =   require('./Clientes');
const operators                 =   require('./Operators');
const admin                     =   require('./Admin');
const plans                     =   require('./Plans');
const contact_companies         =   require('./Companies/contact/Contact_companies');
const companies                 =   require('./Companies/Companies');
const Login                     =   require('./Login');
const publish                   =   require('./Uploads');


//Route Paths
router.use('/login', Login);
router.use('/clientes', clientes);
router.use('/operadores', operators); 
router.use('/administradores', admin); 
router.use('/planos', plans);  


//Company Route Paths
router.use('/contato', contact_companies) 
router.use('/empresas', companies); 


module.exports = router;


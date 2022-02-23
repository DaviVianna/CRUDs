const express = require('express');
const cookieParser = require('cookie-parser'); //troca de dados
const cors = require('cors');
const path = require('path'); //trabalhar com pastas

const mongoose = require('mongoose');
const routes = require('./src/Routes/index');



 mongoose.connect('mongodb://localhost:27017/crud_mongodb', {

    }, function(err) {

        if(err) {

            console.log(err);

        }else {

            console.log('Database conectado corretamente.');

        }

    });





const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {

    console.log('Server run port on 3000.');

});
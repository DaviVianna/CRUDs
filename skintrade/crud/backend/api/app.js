const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());


const routes = require('./src/routes/index');

//main route file
app.use('/', routes);
app.use(express.static('public') );



app.listen(3000, () => {
    
    console.log('Servidor rodando na porta 3000');

});
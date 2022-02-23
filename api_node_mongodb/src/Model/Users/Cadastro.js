const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({    
    
    nome: String, 
    cpf: Number,
    usuario: String,
    senha: String,

});


const users = mongoose.model('usuarios', dataSchema);

module.exports = users;

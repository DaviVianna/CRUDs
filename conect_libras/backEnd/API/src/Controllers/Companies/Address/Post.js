//Required Model
const db = require("../../../Models/Companies/Address/Posts");


const post = async (req, res) => {


    const data = {

        cep:            req.body.cep,
        logradouro:     req.body.logradouro, //Autocomplete
        complemento:    req.body.complemento,
        numero:         req.body.numero,
        bairro:         req.body.bairro, //Autocomplete
        cidade:         req.body.cidade, //Autocomplete
        estado:         req.body.estado, //Autocomplete
        

    }
 

    if(!data.cep || data.cep == '' ||  typeof data.cep == undefined || data.cep == null) { //CEP

        res.status(400).send({
            codigo: 2,
            msg: 'CEP não informado'

        });

    }else if(data.cep.length < 8) { //CEP
        
        
        res.status(400).send({
            codigo: 3,
            msg: 'CEP deve conter 8 números.'

        });

        
    }else if(!data.logradouro || data.logradouro.trim() == '' || typeof data.logradouro == undefined || typeof data.logradouro == null || data.logradouro.length == 0) { //Logradouro
        
        res.status(400).send({

            codigo: 4,
            msg: 'Logradouro não informado.'

        });
        
    }else if(!data.complemento || data.complemento.trim() == '' || typeof data.complemento == undefined || data.complemento == null || data.complemento.length == 0) { //COMPLEMENTO


        res.status(400).send({

            codigo: 5, 
            msg: 'Complemento não informado.'

        });

    }else if(!data.numero || data.numero.length == 0 || data.numero.trim() == '' || typeof data.numero == undefined || data.numero == null) { //NUMERO

        res.status(400).send({
            
            codigo: 4, 
            msg: 'Número não informado'

        });


        
    }else if(!data.bairro || data.bairro.trim() == '' || data.bairro == undefined || data.bairro == null || data.bairro.length == 0 ) { //Bairro
        
        
        res.status(400).send({

            codigo: 5,
            msg: 'Bairro não informado.'

        });
        
    }else if(!data.cidade || data.cidade.trim() == '' || data.cidade == undefined || data.cidade == null || data.cidade.length == 0 ) { //Cidade

        res.status(400).send({

            codigo: 6, 
            msg: 'Cidade não informada.'

        });


    }else if(!data.estado || data.estado.trim() == '' || data.estado.length == 0 || data.estado == undefined || data.estado == null) { //Estado

        res.status(400).send({

            codigo: 7, 
            msg: 'Estado não informado.'


        });

    }else{

        
        //Instânciando a Model
        await db.insertAddress(data);

        res.status(201).send({
            
            codigo: 1,
            msg: 'Endereço cadastrado corretamente.'
            
        });


    }
     
}


module.exports = { post }
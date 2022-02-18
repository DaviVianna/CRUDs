//Required Model 
const db = require('../../../Models/Companies/Companies/Post');
const { cnpj }  = require('cpf-cnpj-validator');





const post = async (req, res) => {



    const data = {
    
       cnpj:         req.body.cnpj,
       empresa:      req.body.empresa,
       responsavel:  req.body.responsavel,
       cep:          req.body.cep,
       logradouro:   req.body.logradouro,
       numero:       req.body.numero,
       bairro:       req.body.bairro ,
       cidade:       req.body.cidade,
       estado:       req.body.estado,
       plano:        req.body.plano,
       
    }
    
    const { telefone, telefone2, celular, celular2, email, email2 } = req.body;
    console.log(data);
    console.log( telefone, telefone2, celular, celular2, email, email2);
  


    if(data.empresa.trim() == '' || data.empresa == undefined || data.empresa == null) {

        res.status(400).send({

            codigo: 3, 
            msg: 'Empresa não informada.'

        });

    }else if(data.responsavel.trim() == '' || data.responsavel == undefined || data.responsavel == null) {

        res.status(400).send({

            codigo: 4, 
            msg: 'Responsável não informado.'

        });

    }else if(data.cep.trim() == '' || data.cep == undefined || data.cep == null) {

        res.status(400).send({

            codigo: 5, 
            msg: 'CEP não informado.'

        });


    }else if(data.cep.length <= 7) {

        res.status(400).send({

            codigo: 6,
            msg: 'CEP deve conter 8 dígitos.'

        });

    }else if(data.logradouro.trim() == '' || data.logradouro == undefined || data.logradouro == null) { //LOGRADOURO

        res.status(400).send({

            codigo: 7, 
            msg: 'Logradouro não informado.'


        });

    }else if(data.numero.trim() == '' || data.numero == undefined || data.numero == null) { //NUMERO

        res.status(400).send({

            codigo: 9, 
            msg: 'Numero não informado.'

        });

    }else if(data.bairro.trim() == '' || data.bairro.length == 0 || data.bairro == undefined || data.bairro == null) { //BAIRRO

        res.status(400).send({

            codigo: 10, 
            msg: 'Bairro não informado.'

        });

    }else if(data.cidade.trim() == '' || data.cidade.length == 0 || data.cidade == undefined || data.cidade == null) { //CIDADE


        res.status(400).send({

            codigo: 11, 
            msg: 'Cidade não informada.'

        });

    }else if(data.estado.trim() == '' || data.estado.length == 0 || data.estado == undefined || data.estado == null) { //ESTADO


        res.status(400).send({

            codigo: 11, 
            msg: 'Estado não informado.'


        });


    
    }else {

        

        //Instânciando a Model
        await db.insertCompanies(data);

        //Instanciando a Model que vai inserir os dados de contato na tbl_contato_empresa
        await db.insert_contato_empresa(data, telefone, telefone2, celular, celular2, email, email2);

      

        res.status(201).send({

            codigo: 1, 
            msg: 'Empresa cadastrada corretamente.'

        });


        
    }
    


    
}


module.exports = { post }
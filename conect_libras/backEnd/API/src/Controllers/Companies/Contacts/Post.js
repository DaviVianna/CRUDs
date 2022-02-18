
//Required Model
const db = require("../../../Models/Companies/Contact/Post");




const post = async (req, res) => {


    const data = {

        cnpj:        req.body.cnpj,
        email:       req.body.email, 
        email2:       req.body.email2, 
        telefone:    req.body.telefone, 
        telefone2:    req.body.telefone2, 
        celular:     req.body.celular, 
        celular2:     req.body.celular2, 
        responsavel: req.body.responsavel

    }
      

    if(data.cnpj.trim() == '' || typeof data.cnpj == undefined || data.cnpj == null) {


        res.status(400).send({

            codigo: 2, 
            msg: 'CNPJ não informado.'

        });


    //Validações dos dados passados
    }else if(data.cnpj.length <= 13) {
        
        res.status(400).send({

            codigo: 3, 
            msg: 'CNPJ deve conter 14 dígitos.'


        });
        
        
    }else if(data.email.trim() == "" || typeof data.email == undefined || data.email == null) {

        res.status(400).send({

            codigo: 4, 
            msg: 'Email não informado.'

        });

    }else if(data.telefone == "" || typeof data.telefone == undefined || data.telefone == null) {

      
        res.status(400).send({

            codigo: 5, 
            msg: 'Telefone não informado.'

        });

        

    }else if(data.telefone.length < 10) {
        
        
        res.status(400).send({

            codigo: 6, 
            msg: 'Telefone deve conter 10 caracteres.'

        });
        
        
    }else if(data.celular == "" || typeof data.celular ==  undefined || data.celular == null) {


        res.status(400).send({

            codigo: 7, 
            msg: 'Celular não informado.'

        });


    }else if(data.celular.length < 11) {
        
    
        res.status(400).send({

            codigo: 8, 
            msg: 'Celular deve conter 11 caracteres.'

        });
        
     
    }else if(data.responsavel == '' || typeof data.responsavel == undefined || data.responsavel == null ) {
      
        
        res.status(400).send({

            codigo: 9, 
            msg: 'Responsavel não informado.'

        });

        
        
    }else {


        //Instânciando a Model
        await db.insertContacts(data);

        res.status(201).send({
            
            codigo: 1,
            msg: 'Contato cadastrado corretamente.'
            
        });


    }
    
}


module.exports = { post }
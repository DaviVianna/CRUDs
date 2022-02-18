//required Model
const bodyParser = require('body-parser');
const db = require('../../Models/Files/Posts');


const post = async (req, res) => {

    const data = {

        usuario: req.body.usuario,
        file:    req.file.path
    }


    //Instâncio a Model
    await db.insertFiles(data);
    res.status(200).send({
        
        msg: 'sucesso'
    
    });
   

}



module.exports = { post }

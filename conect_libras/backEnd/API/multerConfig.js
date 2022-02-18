const multer = require('multer');
const path   = require('path');



const multerConfig = {


    dest: path.resolve('./tmp/Uploads'),
    storage: multer.diskStorage({

        //local onde será salvo
        destination: (req, file, cb) => {

            cb(null, path.resolve('./tmp/Uploads'));

        },

        //Config o nome do arquivo
        filename: (req, file, cb) => {

            const filename = `${Date.now()}-${file.originalname}`;
            cb(null, filename);

        },

        //Limitando o tamanho do arquivo
        limits: {

            fileSize: 1024 * 1024 * 5,
    
        },


        //Tipo de Arquivo que pode ser enviado.
        fileFilter: (req, file, cb) => {

            const allowTypes = [

                'image/jpg',
                'image/png',

            ]

            //Verificando se o tipo de arquivo é o mesmo que foi passado
            if(allowTypes.includes(file.mimetype)) {

                cb(null, true);

            }else {

                cb(new Error('Tipo de arquivo não permitido .'));

            }


        }

    })

}

module.exports = { multerConfig };
const multer = require('multer');
const path = require('path');


const multerConfig = {

    dest: path.resolve('./src/tmp/uploads/'),
    storage: multer.diskStorage({

        destination: (req, file, cb) => {

            cb(null, path.resolve('./src/tmp/uploads/'));
    
        },
    
        filename: (req, file, cb) => {
            const filename = `${Date.now()} - ${file.originalname}`;
            cb(null, filename);
    
        },


        limits: {

            fileSize: 1024 * 1024 * 5,
        },


        fileFilter: (req, file, cb) => {

            const allowTypes = [

                'image/jpg',
                'image/jpeg',
                'image/png',

            ];

            //Verificando o tipo do arquivo
            if(allowTypes.includes(file.mimetype)) {

                cb(null, true);

            }else {
    
                cb(new Error('Tipo de arquivo enviado não permitido .'));

            }

        }

    })

}


module.exports = multerConfig;
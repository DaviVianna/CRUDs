const db = require('../../Model/Users/Cadastro');


module.exports = {

    async index(req, res) {

        const results = await db.find();
        res.json(results);

    },

    async store(req, res) {


        const data = {

            nome:       req.body.nome,
            cpf:        req.body.cpf,
            usuario:    req.body.usuario,
            senha:      req.body.senha

        }

        //Instancio a Model
        await db.create(data);

        res.status(200).send({
            
            codigo: 1, 
            msg: 'Conta criada corretamente.'

        });

        

    },


    async searchId(req, res) {

        const data = {

            id: req.params
        }

        const result = await db.findOne(data.id);  //select * from tbl_users WHERE id = ?
        res.send(result);

    },


    async updateId(req, res) {

        const { _id } = req.params;

        const data = {

            nome:       req.body.nome,
            cpf:        req.body.cpf,
            usuario:    req.body.usuario,
            senha:      req.body.senha,

        }


        //Instancio a Model
        await db.findByIdAndUpdate({ _id }, data, { new: true });

        res.status(200).send({

            codigo: 1, 
            msg: 'Dados alterados corretamente.'
        });


    },



    async deleteId(req, res) {

        const data = {

            id: req.params

        }


        //Instancio a Model
        await db.findByIdAndDelete(data.id);

        res.status(200).send({

            codigo: 1, 
            msg: 'Usuário deletado corretamente.'

        });

    }


}
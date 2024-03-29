const axios = require("axios");

module.exports = class Services {
    //VERIFICAR USUÁRIO
    static async UsuarioLogin(req, res) {
        let valores = req.body;
        const options = {
            url: 'https://fic2-m4-semana04-aula20-backend.schimith1.repl.co/login',
            method: 'POST',
            data: valores
        };

        axios(options).then((usuario) => {
            if (usuario != undefined) {
                return res.render('logado');
            }
        })
    }
    //Create usuário
    static async UsuarioCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'https://fic2-m4-semana04-aula20-backend.schimith1.repl.co/add_usuario',
            method: 'POST',
            data: valores
        };

        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }

}
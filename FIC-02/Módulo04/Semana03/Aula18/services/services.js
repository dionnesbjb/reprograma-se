const axios = require("axios");

module.exports = class Services {
    static async TarefaCreate(req, res) {
        let valores = req.body;

        const options = {
            url: 'https://.repl.co/tarefas/cadastrar',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }
}
const axios = require("axios");
var cookie = require('cookie-parser');
module.exports = class Services {

    //LISTAR
    static async TarefaListar(req, res) {
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/tarefas/1',
            method: 'GET',
            data: {}
        };
        axios(options).then(response => {
            console.log(response.data);
            const tarefa = response.data

            res.render("tarefas/listar", { tarefa });
        });
    }
    //Create
    static async TarefaCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/tarefas/Cadastrar',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }
    //Update
    static async TarefaUpdate(req, res) {

        let valores = req.body;
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/tarefas/' + valores.id_tarefa,
            method: 'PUT',
            data: valores
        };
        axios(options);
        const mensagem = "Registro atualizado com sucesso";
        res.render("mensagem", { mensagem });
    }
    //Delete
    static async TarefaDelete(req, res) {
        let id_tarefa = req.body.id_tarefa;
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/tarefas/' + id_tarefa,
            method: 'DELETE'
        };
        axios(options);
        const mensagem = "Tarefa excluída com sucesso!";
        res.render("mensagem", { mensagem });
    }
    //Create
    static async UsuarioCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/usuarios/cadastrar',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }
    //Create
    static async UsuarioVerificar(req, res) {
        let valores = req.body;
        const logado = "";
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/usuarios/logar',
            method: 'POST',
            data: valores
        };
        axios(options).then(response => {
            const logado = response.data;
            console.log(logado);

            //criar cookies
            let usuario = {
                id_usuario: logado.dadosUser.id_usuario,
                nome: logado.dadosUser.nome
            }
            res.cookie("usuarios", usuario);

            res.render("tarefas/listar", { usuario });
        }).catch(function (error) {
            if (error) {

            }
        })

    }

    //LISTAR
    static async UsuarioListar(req, res) {
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/usuarios',
            method: 'GET',
            data: {}
        };
        axios(options).then(response => {
            console.log(response.data);
            const usuario = response.data

            res.render("usuarios/listar", { usuario });
        });
    }
    //Create usuário
    static async UsuarioCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'https://listatarefas.antonioizo.repl.co/usuarios/Cadastrar',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }
}
//BIBLIOTECAS E MÓDULOS
var express = require("express");
var router = express.Router();

// ROTA PRINCIPAL
router.get('/', function (req, res) {
    res.send("Seja bem vindo a prática da semana 1");
});
// CRIANDO LISTA ESTADOS
var estados = [];

//ROTA POST PARA CADASTRAR ESTADOS NA LISTA
router.post('/estados/cadastrar', (req, res) => {
    let nome = req.body.nome;
    estados[(estados.length)] = nome;
    return res.json([estados[(estados.length - 1)]]);
});

//ROTA GET QUE CHAMA O FORMULÁRIO
router.get("/estados", function (req, res) {
    res.render("form");
});

//EXPORTAR O ARQUIVO COMO MÓDULO PARA SER USADO NA APLICAÇÃO.
module.exports = router;
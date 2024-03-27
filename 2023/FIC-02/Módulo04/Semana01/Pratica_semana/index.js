//BIBLIOTECAS E MÓDULOS
const express = require("express");
const app = express();
const hand = require("express-handlebars");
var route = require("./routes/route");

//PORTA DO SERVIDOR
const porta = 3000;

//CONFIGURAÇÃO DO HANDLEBARS
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

//CODIFICAÇÃO PARA ORGANIZAR HTML PARA JSON
app.use(express.urlencoded({ extended: true }));

//ROTA PRINCIPAL ENVIANDO PARA O ARQUIVO DE ROTAS
app.use("/", route);

//SERVIDOR
app.listen(porta, () => {
    console.log("Exemplo de uso de rotas.");
});
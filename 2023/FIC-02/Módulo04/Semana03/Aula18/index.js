const express = require("express");
const app = express();
const hand = require("express-handlebars");
const Services = require("./services/services");
const routes = require("./routes/routes");

//CONFIGURAÇÃO DO HANDLEBARS
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

//CODIFICAÇÃO PARA ORGANIZAR HTML PARA JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROTA PRINCIPAL ENVIANDO PARA O ARQUIVO DE ROTAS
app.use("/", routes);

app.listen(3000);
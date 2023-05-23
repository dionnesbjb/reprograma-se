const express = require("express");
const app = express();
const porta = 3000;
const hand = require("express-handlebars");
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");


var route = require("./routes/route");
app.use(express.urlencoded({ extended: true }));
app.use("/", route);

app.listen(porta, () => {
    console.log("Exemplo de uso de rotas.");
});
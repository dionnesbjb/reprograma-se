const express = require("express");
const app = express();
const database = require('./db/db');
const Usuario = require('./model/usuarioModel');
const Tarefa = require('./model/tarefaModel');
const routes = require('./routes/routes');

try {
  database.sync().then(() => {
    console.log("Sucesso ao sincronizar!")
  })
}
catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados", erro);
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
  return res.json({ message: "Sistema de Lista de Tarefas" });
});

app.listen(3000);
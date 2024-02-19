// importando bibliotecas e arquivos
const database = require('./db');
const Cliente = require('./models/cliente');
const Fornecedor = require('./models/fornecedor');

/// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');
// Setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Definindo rotas
app.get('/', (req, res) => {
  res.send('Bem vindo ao sistema de cadastro </br> <a href="/cadcliente">Cadastrar Cliente </a> </br>  <a href="/cadfornecedor">Cadastrar Fornecedor </a>');

});

app.get("/cadcliente", function(req, res) {
  res.render('formCliente');
})

app.post("/addcliente", function(req, res) {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(function() {
    res.send("Cliente cadastrado com sucesso!");
  })
})

//definindo rotas da atividade prática
app.get("/cadfornecedor", function(req, res) {
  res.render('formFornecedor');
})

app.post("/addfornecedor", function(req, res) {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email
  }).then(function() {
    res.send("Fornecedor cadastrado com sucesso!");
  })
})

app.listen(porta, () => { console.log('Servidor rodando') });


(async () => {

  try {
    const resultado = await database.sync();
    console.log(resultado);
    //Lista de clientes
    const clientes = await Cliente.findAll();
    console.log("Lista de Clientes \n", JSON.stringify(clientes, null, 2), "\n\n");
    //Lista de fornecedores
    const fornecedores = await Fornecedor.findAll();
    console.log("Lista de Fornecedores \n", JSON.stringify(fornecedores, null, 2), "\n\n");
  } catch (error) {
    console.log(error);
  }
})();
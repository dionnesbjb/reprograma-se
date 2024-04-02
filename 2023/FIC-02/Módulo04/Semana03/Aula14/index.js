const express = require('express');
const app = express();
var cookie = require('cookie-parser');
app.use(cookie());
let user1 = { nome: "Usuario1", apelido: "user1", idade: "10", cidade: "Vitoria" };
let user2 = { nome: "Usuario2", apelido: "user2", idade: "10", cidade: "Vitoria" };
let user3 = { nome: "Usuario3", apelido: "user3", idade: "10", cidade: "Vitoria" };

app.get('/', (req, res) => {
  res.send('Seja bem vindo aos cookies!');
});

app.get('/adicionarCookie', (req, res) => {
  res.cookie('user1', user1, { expire: 40000 + Date.now() });
  res.cookie('user2', user2, { expire: 40000 + Date.now() });
  res.cookie('user3', user3, { expire: 40000 + Date.now() });
  res.send('Dados do usuário adicionado com sucesso!');
});

app.get('/mostrarCookies', (req, res) => {
  res.send(req.cookies);
});

app.get('/logout', (req, res) => {
  res.clearCookie('user1');
  res.send('Usuário 1 desconectado com sucesso!');
});

app.listen(3000);
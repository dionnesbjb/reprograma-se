const express = require("express");
const Services = require("../services/services");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Seja bem Vindo ao nosso sistema de Varejo Virtual.");
});

router.post("/login", Services.FuncionarioLogin);

router.get("/login", (req, res) => {
  res.render("funcionarios/login");
})

router.post("/login", Services.FuncionarioLogin)

router.get("/funcionarios/Cadastrar", (req, res) => {
  res.render("funcionarios/Cadastrar");
})

router.post("/funcionarios/Cadastrar", Services.FuncionarioCreate);

////////////PRODUTO

router.get("/livros/Cadastrar", (req, res) => {
  res.render("livros/Cadastrar");
})
router.post("/livros/Cadastrar", Services.LivroCreate);

router.get("/livros/listar", Services.LivroListar);

module.exports = router;
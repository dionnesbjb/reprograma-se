const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Seja bem vindo ao nosso sistema de Usuarios.");
})

///ROTAS SERVIÇOS USUÁRIOS

router.get("/usuarios/listar", Services.UsuarioListar);
router.get("/usuarios/Cadastrar", (req, res) => {
  res.render("usuarios/Cadastrar");
})
router.post("/usuarios/Cadastrar", Services.UsuarioCreate);

module.exports = router;
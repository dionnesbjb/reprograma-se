const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Seja bem vindo ao nosso sistema de tarefas.");
});

router.get("/tarefas/cadastrar", (req, res) => {
    res.render("tarefas/cadastrar");
});

router.post("/tarefas/Create", Services.TarefaCreate);

module.exports = router;
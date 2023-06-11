const express = require("express");
const Services = require("../services/services");
const router = express.Router();

//router.get("/", (req, res) => {
//  res.send("Seja bem vindo ao nosso sistema de tarefas.");
//});

router.get("/", (req, res) => {
  res.render("tarefas/cadastrar");
});

router.get("/tarefas/cadastrar", (req, res) => {
  res.render("tarefas/cadastrar");
});

router.get("/tarefas/alterar/:id_tarefa/:titulo/:descricao",(req, res) =>{
 let tarefas = {
 id_tarefa : req.params.id_tarefa,
 titulo : req.params.titulo,
 descricao : req.params.descricao
 }
 res.render("tarefas/update",{tarefas});
})


//ROTA PARA SERVIÇO DE CREATE
router.post("/tarefas/Create", Services.TarefaCreate);

//ROTA PARA O SERVIÇO LISTAR
router.get("/tarefas/listar",Services.TarefaListar);

//ROTA PARA O SERVIÇO UPDATE
router.post("/tarefas/Update",Services.TarefaUpdate);

module.exports = router;
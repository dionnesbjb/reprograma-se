////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();

//////CONTROLLERS
const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livroController");

////////////////Requisições HTTP Principal /////////////////////
router.get("/",(req, res) =>{
  return res.json({message: "Sistema de Livraria"});
})

////////////////Requisições HTTP Funcionario /////////////////////
//POST - CADASTRAR
router.post("/add_funcionario", funcionarioController.FuncionarioCreate);

//GET - LISTAR
router.get("/funcionarios/:id?", funcionarioController.FuncionarioListar);

//PUT - UPDATE
router.put("/funcionarios/:id", funcionarioController.FuncionarioUpdate);

// DELETE
router.delete("/funcionarios/:id", funcionarioController.FuncionarioDelete);

router.post("/login", funcionarioController.FuncionarioVerificaLogin);
//GET - LISTAR
router.get("/funcionarios/:id?",funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

/////////////Requisições HTTP Livro

//POST - CADASTRAR
router.post("/add_livros", livroController.livroCreate);

//GET - LISTAR
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;
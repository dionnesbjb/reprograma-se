const axios = require("axios");

module.exports = class Services {
  //CADASTRO
  static async TarefaCreate(req, res) {
    let valores = req.body;

    const options = {
      url: 'https://fic2-m4-semana03-aula16.schimith1.repl.co/tarefas/cadastrar',
      method: 'POST',
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async TarefaListar(req, res) {
    const options = {
      url: 'https://fic2-m4-semana03-aula16.schimith1.repl.co/tarefas',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const tarefa = response.data
      res.render("tarefas/listar", { tarefa });
    });
  }

  //UPDATE
  static async TarefaUpdate(req, res) {

    let valores = req.body;
    const options = {
      url: 'https://fic2-m4-semana03-aula16.schimith1.repl.co/tarefas/' + valores.id_tarefa,
      method: 'PUT',
      data: valores
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }


}
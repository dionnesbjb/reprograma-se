const axios = require("axios");

module.exports = class Services {

  //Create USER
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: 'https://fic2-m4-semana03-aula16.schimith1.repl.co/usuarios/cadastrar',
      method: 'POST',
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR USER
  static async UsuarioListar(req, res) {
    const options = {
      url: 'https://fic2-m4-semana03-aula16.schimith1.repl.co/usuarios',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const usuario = response.data

      res.render("usuarios/listar", { usuario });
    });
  }
}
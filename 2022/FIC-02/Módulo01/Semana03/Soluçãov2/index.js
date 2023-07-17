const fs = require('fs');
const prompt = require('prompt-sync')();

function adicionarPessoa(lista, pessoa){

  lista.push(pessoa);
  json = JSON.stringify({pessoas: lista})
  
  return new Promise((resolve, reject) => {
    fs.writeFile('bd.json', json, (erro) => {

      if(erro){
        reject(erro);
      }

      resolve('Pessoa cadastrada com sucesso!')
    });
  });
}

function obterPessoas(){

  return new Promise((resolve, reject) => {
    fs.readFile('./bd.json', 'utf-8', (erro, data) => {

      if(erro){
        reject(erro);
      }
      
      resolve(data);
    })
  });
}

//Listar pessoas
// async function, visto na aula 12
async function listarPessoas(){

  try{
    //Chama função obterPessoas que ira ler o arquivo json
    var json = await obterPessoas();
    //Faz o parte do json para o array pessoas
    var pessoas = JSON.parse(json).pessoas;

    // O console.table ira converter o json para o formato de tabela no console 
    console.table(pessoas);
  }catch(erro){
    console.log('Ocorreu um erro ao buscar as pessoas: ' + erro);
  }
  
}

async function incluirPessoa(){
  
  var nome = prompt('Digite o nome da pessoa: ');
  var telefone = prompt('Digite o telefone da pessoa: ');

  var pessoa = {nome: nome, telefone: telefone};

  try{
    var pessoas = await obterPessoas(); 
    var lista = JSON.parse(pessoas).pessoas;
    
    adicionarPessoa(lista, pessoa);
    console.log('Pessoa cadastrada com sucesso...');
  }catch(erro){
    console.log('Ocorreu um erro ao adicionar a pessoa: ' + erro);
  }
}

//Menu principal
// async function, visto na aula 12
async function menu(){

  var op;

  //Ira executar essa estrutura de repetição até que o usuário digite 0 no console
  do{
    console.log(`Sistema de cadastro de pessoas
    
    1 - Listar pessoas
    2 - Cadastrar pessoas
    0 - Sair
    `);

    op = prompt('Digite a opção desejada: ');

    switch (op){
      case '1':
        await listarPessoas();
        prompt(`Enter para continuar...`);
        console.clear();
        break;
      case '2':
        await incluirPessoa();
        prompt(`Enter para continuar...`);
        console.clear();
        break;
      case '0':
        console.log('Programa encerrado!');
        break;
      default:
        console.log('Entrada inválida...');
        break;
    }
  }while(op !== '0');  
}

//Ao executar o index.js, a função menu é chamada 
menu();
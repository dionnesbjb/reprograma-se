const fs = require('fs');

dados = fs.readFileSync('./pessoas.json', 'utf-8');

arquivo = JSON.parse(dados);

console.log(arquivo.pessoas);
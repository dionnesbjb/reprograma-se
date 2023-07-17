const prompt = require('prompt-sync')();

// Entrada de dados (1 ponto)
var n1 = parseInt(prompt("Digite o número 1: "));
var n2 = parseInt(prompt("Digite o número 2: "));
var n3 = parseInt(prompt("Digite o número 3: "));

// Processamento (2 pontos)
var soma = n1 + n2 + n3;
var media = (n1 + n2 + n3) / 3;

// Saída de dados (1 ponto)
console.log("A soma é: ", soma);
console.log("A média é: ", media);


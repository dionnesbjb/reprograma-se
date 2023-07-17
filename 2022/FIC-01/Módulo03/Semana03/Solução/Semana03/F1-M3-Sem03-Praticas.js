var pares = 0;
var impares = 0;

console.log("Solução do exercicio com for:");

for (let i = 1; i <= 20; i++) {   // 2 pontos
  var quadrado = i * i;
  console.log(quadrado);
  if (quadrado % 2 == 0) {        // 2 pontos
    pares = pares + quadrado;     // 2 pontos
  } else {                        // 2 pontos  
    impares = impares + quadrado; // 2 pontos
  }
}

console.log("A soma de quadrados pares: ", pares);
console.log("A soma de quadrados ímpares: ", impares);

console.log("----------------------------------------");

var pares = 0;
var impares = 0;

console.log("Solução do exercicio com while:");

var i = 0;
while (i <= 20) {   // 2 pontos
  var quadrado = i * i;
  console.log(quadrado);
  if (quadrado % 2 == 0) {        // 2 pontos
    pares = pares + quadrado;     // 2 pontos
  } else {                        // 2 pontos  
    impares = impares + quadrado; // 2 pontos
  }
  i++;
}

console.log("A soma de quadrados pares: ", pares);
console.log("A soma de quadrados ímpares: ", impares);

console.log("----------------------------------------");

var pares = 0;
var impares = 0;

console.log("Solução do exercicio com do/while:");

var i = 0;
do {   // 2 pontos
  var quadrado = i * i;
  console.log(quadrado);
  if (quadrado % 2 == 0) {        // 2 pontos
    pares = pares + quadrado;     // 2 pontos
  } else {                        // 2 pontos  
    impares = impares + quadrado; // 2 pontos
  }
  i++;
} while (i <= 20);

console.log("A soma de quadrados pares: ", pares);
console.log("A soma de quadrados ímpares: ", impares);

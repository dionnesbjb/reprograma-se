var pares = 0;
var impares = 0;


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
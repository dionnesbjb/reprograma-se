const prompt = require('prompt-sync')();

alturas = []

for (var i = 0; i < 10; i++) {                        // 2 pontos
  a = parseFloat(prompt("Digite a altura: "));
  alturas.push(a);                                    // 2 pontos
}

for (var i = 0; i < 10; i++) {                        // 2 pontos
  var cont = 0;

  for (var j = 0; j < 10; j++) {                      // 2 pontos
    if (alturas[i] > alturas[j]) {                    // 3 pontos
      cont = cont + 1;                                // 2 pontos
    }
  }

  // saída de dados (2 pontos)
  console.log("Aluno " + i + ": maior que " + cont + " aluno(s)");
}

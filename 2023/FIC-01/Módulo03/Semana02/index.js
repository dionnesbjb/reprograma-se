const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseInt(prompt("Digite seu salário: "));

if (idade >= 65 || tempo >= 30 || (idade >= 60 && tempo >= 25)) { // 2 pontos
  console.log("Você pode se aposentar!");

  // 4 pontos (comandos de decisão e cálculos)
  if (tempo > 20) {
    sal_aposentadoria = salario * 80 / 100;
  } else {
    sal_aposentadoria = salario * 60 / 100;
  }

  // 4 pontos (comandos de decisão e cálculos)
  if (sal_aposentadoria < 1212) {
    sal_aposentadoria = 1212;
  }
  if (sal_aposentadoria > 7087.22) {
    sal_aposentadoria = 7087.22;
  }

  console.log("Seu salário de aposentado será: ", sal_aposentadoria);
} else {
  console.log("Você não pode se aposentar!");
}
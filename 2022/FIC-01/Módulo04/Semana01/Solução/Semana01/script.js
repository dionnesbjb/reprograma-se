var elementos = document.getElementsByClassName('produto_preco'); // 3 pontos

// Soma dos preços (5 pontos)
var soma = 0;
for (let i = 0; i < elementos.length; i = i + 1) {
  soma = soma + parseFloat(elementos[i].innerText);
}

document.write("Total: R$ " + soma.toFixed(2)); // 2 pontos
var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

var select_animais = document.getElementById('select_animais'); // 1 ponto
var div = document.getElementById('container'); // 1 ponto
var p = document.getElementById('nome'); // 1 ponto

select_animais.addEventListener('input', listarAnimais); // 1 ponto
div.addEventListener('mouseover', mostrarNome); // 1 ponto
div.addEventListener('mouseout', limparNome); // 1 ponto

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();

  let animais;
  if (select_animais.value == "dog") {
    animais = cachorros;
  } else {
    animais = gatos;
  }

  for (animal of animais) {
    let novaDiv = document.createElement('div');
    novaDiv.innerHTML = `<img src=./img/${animal.imagem}.jpg id=${animal.nome}>`;
    document.querySelector('#container').appendChild(novaDiv);
  }

}

function mostrarNome(e) { // Implementação da função (4 pontos)
  p.innerText = e.target.id;
}

function limparNome() {
  p.innerText = "";
}

function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
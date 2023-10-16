const prompt = require('prompt-sync')();
var array_clientes = [];

do {
    console.log("Sistema de Cadastro de Clientes");
    console.log("1 - Inserir Cliente");
    console.log("2 - Excluir Cliente");
    console.log("3 - Listar Clientes");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
        console.log("\n\nInserindo Cliente...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let nome = prompt("Digite o nome: ");
        let email = prompt("Digite o e-mail: ");
        let celular = prompt("Digite o celular: ");
        let estado = prompt("Digite o estado: ");

        const cliente = {
            codigo: codigo,
            nome: nome,
            email: email,
            celular: celular,
            estado: estado
        }

        inserir_cliente(cliente); // 3 pontos (chamada da função)

    } else if (opcao == 2) {
        console.log("\n\nExcluindo Cliente...\n");
        let codigo = prompt("Digite o código do cliente: ");
        excluir_cliente(codigo); // 3 pontos (chamada da função)
    } else if (opcao == 3) {
        console.log("\n\nListando Clientes...\n");
        listar_clientes(); // 3 pontos (chamada da função)
    } else {
        console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
} while (opcao != 0)


function inserir_cliente(cliente) {
    array_clientes.push(cliente); // 3 pontos
}

function excluir_cliente(codigo) {
    for (i = 0; i < array_clientes.length; i++) { // 3 pontos
        let item = array_clientes[i];
        if (item.codigo == codigo) { // 3 pontos
            array_clientes.splice(i, 1); // 3 pontos
        }
    }
}

function listar_clientes() {
    for (i = 0; i < array_clientes.length; i++) { // 3 pontos
        let item = array_clientes[i];
        // 1 ponto (saída de dados)
        console.log(item.codigo, ": ", item.nome, "-", item.email, "-", item.celular, "-", item.estado);
    }
}
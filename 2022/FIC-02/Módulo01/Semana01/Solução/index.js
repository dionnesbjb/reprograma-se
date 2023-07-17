const prompt = require('prompt-sync')();
const processamento = require('./processamento.js');

var alunos = [];

for(var i = 0; i < 10; i++){
    var nome = prompt('Entre com o nome do ' + (i + 1) + 'º aluno: ');
    var nota = Number(prompt('Entre com a nota do ' + (i + 1) + 'º aluno: '));

    alunos.push({
        nome: nome,
        nota: nota
    })
}

let alunoMaiorNota = processamento.maiorNota(alunos);
let alunoMenorNota = processamento.menorNota(alunos);

console.log('O aluno que obteve a maior nota foi ' + alunoMaiorNota.nome + ' com a nota ' + alunoMaiorNota.nota);
console.log('O aluno que obteve a menor nota foi ' + alunoMenorNota.nome + ' com a nota ' + alunoMenorNota.nota);
console.log('A média das notas foi de ' + processamento.media(alunos));
console.log('A quantidade de alunos aprovados foi ' + processamento.aprovados(alunos));
console.log('A quantidade de alunos reprovados foi ' + processamento.reprovados(alunos));


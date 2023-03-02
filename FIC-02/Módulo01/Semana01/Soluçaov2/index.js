const prompt = require('prompt-sync')();
const {MaiorNota, MenorNota, Media, Aprovados, Reprovados} = require('./calc.js');

var alunos = [];

for(var i = 0; i < 10; i++){
    var nome = prompt('Entre com o nome do ' + (i + 1) + 'º aluno: ');
    var nota = Number(prompt('Entre com a nota do ' + (i + 1) + 'º aluno: '));
    alunos.push({nome: nome, nota: nota })
}

let alunoMaiorNota = MaiorNota(alunos);
let alunoMenorNota = MenorNota(alunos);

console.log('O aluno que possui a maior nota foi ' + alunoMaiorNota.nome + ' com a nota ' + alunoMaiorNota.nota);
console.log('O aluno que possui a menor nota foi ' + alunoMenorNota.nome + ' com a nota ' + alunoMenorNota.nota);
console.log('A média das notas foi de ' + Media(alunos));
console.log('A quantidade de alunos aprovados foi ' + Aprovados(alunos));
console.log('A quantidade de alunos reprovados foi ' + Reprovados(alunos));
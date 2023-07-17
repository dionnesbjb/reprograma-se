exports.maiorNota = function(alunos){
    let maiorNota = alunos[0].nota;
    let alunoMaiorNota = alunos[0];

    alunos.forEach(aluno => {
        if(aluno.nota > maiorNota){
            maiorNota = aluno.nota;
            alunoMaiorNota = aluno;
        }
    });

    return alunoMaiorNota;
}

exports.menorNota = function(alunos){
    let menorNota = alunos[0].nota;
    let alunoMenorNota = alunos[0];

    alunos.forEach(aluno => {
        if(aluno.nota < menorNota){
            menorNota = aluno.nota;
            alunoMenorNota = aluno;
        }
    });

    return alunoMenorNota;
}

exports.media = function(alunos){

    var soma = 0;

    alunos.forEach(aluno => {
        soma += aluno.nota;
    })

    return soma/alunos.length;
}

exports.aprovados = function(alunos){

    let quantAprovados = 0;

    alunos.forEach(aluno => {
        if(aluno.nota >= 60){
            quantAprovados++;
        }
    });

    return quantAprovados;
}

exports.reprovados = function(alunos){

    let quantReprovados = 0;

    alunos.forEach(aluno => {
        if(aluno.nota < 60){
            quantReprovados++;
        }
    });

    return quantReprovados;
}
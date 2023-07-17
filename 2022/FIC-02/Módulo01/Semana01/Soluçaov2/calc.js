function MaiorNota(alunos) {
    let maiorNota = alunos[0].nota;
    let alunoMaiorNota = alunos[0];
  
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota > maiorNota) {
        maiorNota = alunos[i].nota;
        alunoMaiorNota = alunos[i];
      }
    }
  
    return alunoMaiorNota;
  }
  
  function MenorNota(alunos) {
    let menorNota = alunos[0].nota;
    let alunoMenorNota = alunos[0];
  
    for (let i = 1; i < alunos.length; i++) {
      if (alunos[i].nota < menorNota) {
        menorNota = alunos[i].nota;
        alunoMenorNota = alunos[i];
      }
    }
  
    return alunoMenorNota;
  }
  
  function Media(alunos) {
    let soma = 0;
  
    for (let i = 0; i < alunos.length; i++) {
      soma += alunos[i].nota;
    }
  
    return soma / alunos.length;
  }
  
  function Aprovados(alunos) {
    let numAprovados = 0;
  
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota >= 60) {
        numAprovados++;
      }
    }
  
    return numAprovados;
  }
  
  function Reprovados(alunos) {
    let numReprovados = 0;
  
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].nota < 60) {
        numReprovados++;
      }
    }
  
    return numReprovados;
  }
  
  module.exports = {
    MaiorNota,
    MenorNota,
    Media,
    Aprovados,
    Reprovados
  };
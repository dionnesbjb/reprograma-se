const prompt = require('prompt-sync')();

var data = prompt('Entre com a data: ');

var [dia, mes, ano] = data.split('/');

if (mes == 01){
  mes = 'janeiro';
}else if (mes == 02){
  mes = 'fevereiro';
}else if (mes == 03){
  mes = 'março';
}else if (mes == 04){
  mes = 'abril';
}else if (mes == 05){
  mes = 'maio';
}else if (mes == 06){
  mes = 'junho';
}else if (mes == 07){
  mes = 'julho';
}else if (mes == 08){
  mes = 'agosto';
}else if (mes == 09){
  mes = 'setembro';
}else if (mes == 10){
  mes = 'outubro';
}else if (mes == 11){
  mes = 'novembro';
}else if (mes == 12){
  mes = 'dezembro';
}

console.log(`${dia} de ${mes} de ${ano}`);


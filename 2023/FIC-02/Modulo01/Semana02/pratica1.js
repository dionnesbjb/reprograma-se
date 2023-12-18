const prompt = require('prompt-sync')();

dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
console.log("Hoje é " + dayName[now.getDay()] + ", " + now.getDate () + " de " + monName[now.getMonth()] + " de " + now.getFullYear () );

var placa = prompt('Entre com a placa do carro: ');

//Domingo = 0
//Segunda = 1
//Terça   = 2
//Quarta  = 3
//Quinta  = 4
//Sexta   = 5
//Sabado  = 6
var weekday = new Date().getDay();

if(placa.endsWith('1') || placa.endsWith('2')){
  if(weekday != 1){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('3') || placa.endsWith('4')){
  if(weekday != 2){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('5') || placa.endsWith('6')){
  if(weekday != 3){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('7') || placa.endsWith('8')){
  if(weekday != 4){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else{
  if(weekday != 5){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}

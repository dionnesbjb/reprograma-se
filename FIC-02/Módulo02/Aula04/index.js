const http = require('http');
const fs = require('fs');
const porta = 443;

const servidor = http.createServer((req, res) => {
  //se existir o arquivo ele atualiza/adiciona
  fs.appendFile('teste.txt', 'Frase criada pelo appendFile diretamente no txt', (err) => {
    if (err) throw err
    console.log('Arquivo criado!')
    
  })

  //Le o conteudo e escreve no html
  fs.readFile('teste.txt', (err, arquivo) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.write(arquivo)
    //finaliza
    res.end()
  })

});

servidor.listen(porta, () => { console.log('Servidor rodando') });
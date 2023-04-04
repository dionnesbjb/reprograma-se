const express = require('express')
const app = express()
const porta = 443

// Exporta uma pasta
// Os arquivos ficam disponibilizados no raiz
// localhost:443/foto.png
//app.use(express.static('fotos'));

// Cria um path virtual "/exemplo", onde os arquivos serão disponibilizados nessa pasta
// localhost:443/fotos/foto.jpg
// localhost:443/css/estilos.jpg
//app.use('/fotos', express.static('fotos'))
//app.use('/css', express.static('css'))

// Exporta o diretorio com suas subpastas e arquivos
app.use(express.static('arquivos'));

app.get('/', function(req,res){
res.sendFile(__dirname + '/home.html')
})
app.get('/p1', function(req,res){
res.sendFile(__dirname + '/p1.html')
})
app.get('/p2', function(req,res){
res.sendFile(__dirname + '/p2.html')
})
app.get('/p3', function(req,res){
res.sendFile(__dirname + '/p3.html')
})


app.listen(porta, ()=> {console.log('Servidor rodando')})
const express = require('express')
const app = express()
const porta = 443

app.get('/', (req, res) => {
res.send('Bem vindo ao Servidor Web utilizando Express!')
})

app.listen(porta, () => { console.log('Servidor rodando') })
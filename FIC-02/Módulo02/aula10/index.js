const express = require('express')
const rotas = require('./rotas')
const porta = 443

const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
    res.send('Cidades do Espírito Santo')
})

app.listen(porta, () => { console.log('Servidor rodando') })
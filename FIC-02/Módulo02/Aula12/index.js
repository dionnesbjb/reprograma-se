const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const porta = 443

app.get('/', (req, res) => {
    res.send('Enviando e-mail com o Nodemailer!')
})

app.get('/sendemail', async (req, res) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "bd654cf1e47108",
            pass: "0d3d7e512f0cb3"
        }
    })

    var message = {
        from: "noreplay@reprograme-se.com",
        to: "reprograme-se@reprograme-se.com",
        subject: "Instrução para recuperar a senha",
        text: "Aluno. \n\n Você solicitou alteração de senha. \n\nEquipe Reprograme-se",
        html: "Prezado Aluno, <br><br> Você solicitou alteração de senha.<br><br>Equipe Reprograme-se<br>"
    }

    transport.sendMail(message, function (err) {
        if (err)
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro: e-mail não enviado!'
            })
        else
            return res.json({
                erro: false,
                mensagem: 'E-mail enviado com sucesso!'
            })

    })
})

app.listen(porta, () => { console.log('Servidor rodando') })
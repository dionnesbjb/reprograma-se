const express = require('express')
const session = require('express-session')
const nodemailer = require("nodemailer")
const app = express()
const porta = 443

var path = require('path')


app.use(session({ secret: '12134567890' }))
app.use(express.urlencoded({ extended: true }))

var login = 'admin'
var password = '1234'

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, './'))

app.post('/', (req, res) => {

    if (req.body.password === password && req.body.login === login) {
        //logado com sucesso
        req.session.login = login
        res.render('logado')
    }
    else {
        res.render('home')
    }
})

app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado')
        console.log('Usuário logado: ' + req.session.login)
    }
    else {
        res.render('home')
    }

})

app.get("/enviaremail", (req, res) => {
    if (req.session.login) {
        res.render("email", { mensagem: "" });
    } else {
        res.render("home");
    }
});

app.post("/enviaremail", async function (req, res) {
    const { email } = req.body;

    if (email) {
        const enviou = await enviarEmail(email);
        if (enviou) {
            res.render("email", { mensagem: "O Email foi enviado com sucesso" });
            return;
        }

        res.render("email", { mensagem: "Não foi possível enviar o email." });
    } else {
        res.render("email", { mensagem: "" });
    }
});

async function enviarEmail(email) {
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "2044f973c6a984",
            pass: "a4e154605a67ae"
        }
    });

    const mensagem = {
        from: "reprograme-se@reprograme-se.ifes.edu.br",
        to: email,
        subject: "Atividade Prática da Semana 4",
        html: "<h1>Esse é o texto da atividade prática da semana 4 em HTML</h1>",
        text: "Esse é o texto da atividade prática da semana 4 em .txt"
    }

    try {
        await transport.sendMail(mensagem);
        return true;
    } catch (err) {
        return false;
    }
}

app.listen(porta, () => { console.log('Servidor rodando') })
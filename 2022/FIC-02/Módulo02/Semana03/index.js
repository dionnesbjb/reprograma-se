const http = require('http')
const formidavel = require('formidable')
const fs = require('fs')
const porta = 443

const servidor = http.createServer((req, res) => {
    if (req.url == '/upload') {
        const form = new formidavel.IncomingForm()
        form.parse(req, (erro, campos, arquivos) => {
            const urlAntiga = arquivos.filetoupload.filepath
            const urlNova = './upload/' + arquivos.filetoupload.originalFilename
            var rawData = fs.readFileSync(urlAntiga)
            fs.writeFile(urlNova, rawData, function (err) {
                if (err) console.log(err)
                res.write("Arquivo enviado com sucesso!\n")
                res.end()
            }) //finaliza writeFile
        }) //finalisa form.parse
    } //finaliza if
    else {
        fs.readFile('pagina.html', (err, arquivo) => {
            res.write(arquivo)
            return res.end()
        }) //finaliza readFile
    } //finaliza else

    if (req.url == '/listar') {
        function listarArquivos(diretorio, arquivos) {
            if (!arquivos)
                arquivos = []
            let listagemArquivos = fs.readdirSync(diretorio)
            console.log(listagemArquivos)
        }
        listarArquivos('./upload')
        res.write('Arquivo(s) exibido(s) no Console!')
        return res.end()
    }


}) //finaliza servidor
servidor.listen(porta, () => { console.log('Servidor rodando') })
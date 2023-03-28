const http = require('http')
const fs = require('fs') // File System - módulo que trabalha com arquivos
const readline = require('readline')
const porta = 443

const servidor = http.createServer((req, res) => {

    fs.readFile('pagina.html', (err, arquivo) => {
        //lê o arquivo site.html e anexa em arquivo
        res.writeHead(200, { 'Content-Type': 'text/html' })
        // vai escrever o conteúdo em arquivo
        res.write(arquivo)
        //retorna para esse servidor e finaliza
        return res.end()
    })

    //cria arquivo (appendFile)
    //se existir o arquivo ele atualiza/adiciona
    fs.appendFile('./teste.txt', 'Nunc accumsan leo sed ex ornare consequat. Sed sollicitudin cursus libero, vel eleifend lorem pretium eget. Quisque in lacus quis velit pharetra tempus in non velit. Fusce feugiat dui nulla, quis tempor eros viverra pulvinar. Maecenas auctor sit amet neque eget placerat. Aliquam luctus condimentum nisl, eu varius lacus auctor eu. Nunc vitae ex fringilla tellus porta hendrerit vel eget elit. Curabitur nec vehicula felis, ac sagittis elit. Cras ultrices nibh eget metus egestas, eu dictum libero interdum. Suspendisse id neque nulla. Fusce nunc magna, consectetur ut odio eu, tristique pharetra sem.', (err) => {
        //indica o arquivo texte.txt e cria o conteudo nele
        //se houver erro, dispara(throw) a mensagem de erro.
        if (err) throw err
        console.log('Arquivo criado!')
        //res.end()
    })


    async function readFileByLine(file) {
        const fileStream = fs.createReadStream(file);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            console.log(line);
        }
    }
    readFileByLine('teste.txt')

})

servidor.listen(porta, () => {console.log('Servidor rodando') });
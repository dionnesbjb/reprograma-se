const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('empresa.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    //console.log('Conectado ao banco de dados Empresa com sucesso!');

    // cria o sincronismo automático com o banco de dados
    db.serialize(() => {
        //criando a tabela setor
        db.run("CREATE TABLE setor (id_setor int primary key, nome varchar(40), ramal varchar(4), e_mail varchar(30) )");
        // inserindo dados na tabela setor
        db.run("INSERT INTO SETOR(ID_SETOR, NOME, RAMAL, E_MAIL) VALUES(1,'FINANCEIRO','4254','FINANCEIRO@EMPRESA.COM')");
        db.run("INSERT INTO SETOR(ID_SETOR, NOME, RAMAL, E_MAIL) VALUES(2,'PORTARIA','4253','PORTARIA@EMPRESA.COM')");
        db.run("INSERT INTO SETOR(ID_SETOR, NOME, RAMAL, E_MAIL) VALUES(3,'SECRETARIA','4237','SECRETARIA@EMPRESA.COM')");

        //criando a tabela funcionario
        db.run("CREATE TABLE funcionario (matricula int primary key,id_setor int not null, nome varchar(40), nascimento date, telefone varchar(15) )");

        // inserindo dados na tabela funcionario
        db.run("INSERT INTO FUNCIONARIO(MATRICULA,ID_SETOR, NOME, NASCIMENTO, TELEFONE) VALUES(1234,1,'ANA','12-04-1978','01219219')");

        db.run("INSERT INTO FUNCIONARIO(MATRICULA,ID_SETOR, NOME, NASCIMENTO, TELEFONE) VALUES(1235,3,'IVO','12-12-2000','07280921')");

        db.run("INSERT INTO FUNCIONARIO(MATRICULA,ID_SETOR, NOME, NASCIMENTO, TELEFONE) VALUES(1236,2,'OTO','07-02-1987','06924324')");

        db.run("INSERT INTO FUNCIONARIO(MATRICULA,ID_SETOR, NOME, NASCIMENTO, TELEFONE) VALUES(1237,1,'CARINA','09-09-1990','02932176')");

        db.each("SELECT matricula, nome FROM FUNCIONARIO", (err, reg) => {
            if (err) {
                console.error(err.message);
            }
            console.log(reg.matricula + "\t" + reg.nome);
        });

    });
});
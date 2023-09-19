const express = require('express');
const tarefaController = require('./controller/tarefaController');
const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

// CONFIGURAÇÕES
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('public'));

// ROTA
app.listen(3000, () => {
    console.log('Server running');
});

const tarefa = new tarefaController();
app.use('/', tarefa.router);

// BANCO DE DADOS
let conexao = mysql.createPool({
  host: '132.226.245.178', 
  database: 'PFS1_104422218200', 
  user: '104422218200', 
  password: '104422218200',
});

var cnn = conexao;
let sql = `SELECT * FROM tb_teste`;

return new Promise(function(res, rej) {
  cnn.query(sql, function (error, results, fields) {
    if (error) 
        console.log(error);
    else 
        console.log(results);
  });
});
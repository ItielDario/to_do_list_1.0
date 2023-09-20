const express = require('express');
const tarefaController = require('./controller/tarefaController');
const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const Database = require('./utils/database');

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

let banco = new Database();
banco.listar();
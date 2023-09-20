const express = require('express');
const tarefaRouter = require('./router/tarefaRoute');
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

// ROTA
const tarefa = new tarefaRouter();
app.use('/', tarefa.router);
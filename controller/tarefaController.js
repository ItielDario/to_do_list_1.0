const express = require('express');
const Database = require('../utils/database');

class tarefaController {
  async viewGet(req, res){
    const listarTarefa = new Database()
    let lista = await listarTarefa.listar();
    
    res.render('tarefas', {lista: lista});
  }

  async viewPost(req, res){
    const listarTarefa = new Database()
    let lista = await listarTarefa.listar();
    const tarefa = req.body.descricaoTarefa;
    
    if(tarefa == ''){
      res.render('tarefas', { validacao: 'alert-danger', text: 'Por favor, preencha o campo abaixo!', lista: lista });
    }
    else{
      res.render('tarefas', { validacao: 'alert-success', text: 'Tarefa incluída com sucesso!', lista: lista  });
    }
  }

  async listarTarefa(res, req){
    let banco = new Database();
    let listaTarefas = await banco.listar();
    
    return listaTarefas;
  }
}

module.exports = tarefaController;
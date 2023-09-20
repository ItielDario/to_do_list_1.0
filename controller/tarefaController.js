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
    
    
  }

  async listarTarefa(res, req){
    let banco = new Database();
    let listaTarefas = await banco.listar();
    
    return listaTarefas;
  }
}

module.exports = tarefaController;
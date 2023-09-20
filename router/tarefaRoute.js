const express = require('express');
const Controller = require('../controller/tarefaController.js');

class TarefaRouter{

  #router

  constructor(){
    this.#router = express.Router();

    let ctrl = new Controller();

    this.#router.get('/', ctrl.viewGet);
    this.#router.post('/', ctrl.viewPost);
  }

  get router(){
    return this.#router
  }
}

module.exports = TarefaRouter;
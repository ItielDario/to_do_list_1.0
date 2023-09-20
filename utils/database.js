const mysql = require('mysql2');

class Database {
  
  #conexao

  constructor(){
    this.#conexao = mysql.createPool({
      host: '132.226.245.178', 
      database: 'PFS1_104422218209', 
      user: '104422218209', 
      password: '104422218209',
    });
  }
  
  listar(){
    var cnn = this.#conexao;
    let sql = `SELECT * FROM tb_tarefa`;
    
    return new Promise(function(res, rej) {
      cnn.query(sql, function (error, results, fields) {
        if (error) 
            rej(error);
        else 
            res(results);
      });
    });
  }



  
}

module.exports = Database;
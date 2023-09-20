const mysql = require('mysql2');

class Database {
  
  #conexao

  constructor(){
    this.#conexao = mysql.createPool({
      host: '132.226.245.178', 
      database: 'PFS1_104422218200', 
      user: '104422218200', 
      password: '104422218200',
    });
  }
  
    
  listar(){
    var cnn = this.#conexao;
    let sql = `SELECT * FROM tb_teste`;
    
    return new Promise(function(res, rej) {
      cnn.query(sql, function (error, results, fields) {
        if (error) 
            console.log(error);
        else 
            console.log(results);
      });
    });
  }

  
}

module.exports = Database;
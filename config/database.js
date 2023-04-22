var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cidades'
});
 
try {
    db.connect();
    console.info("Banco de dados conectado com sucesso.")
} catch (error) {
    console.error("Erro ao conectar no banco de dados")
}

module.exports = db;

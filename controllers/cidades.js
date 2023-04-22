const db = require('../config/database')

const buscarCidades = (req, res) => {
    let query = `SELECT c.nome, e.uf FROM cidade AS c INNER JOIN estado AS e ON c.uf = e.id limit 10;`
    db.query(query, function (error, result){
        if (!error){
            res.json(result)
        }else{
            res.json({
                "msg": "erro ao buscar cidades"
            })
        }
    })
    

}

module.exports = { buscarCidades }
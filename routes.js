const app = require('./config/server.js')
const { buscarCidades } = require('./controllers/cidades.js')

app.get("/", (req, res)=>{
    res.json({
        "api": "api-cidades",
        "version": "1.0"
    })
})

app.get("/cidades", buscarCidades)
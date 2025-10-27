const express = require('express')
const conectaBancoDeDados = require('./bancoDeDados')

const app = express()
const porta = 3333

// connect to MongoDB
conectaBancoDeDados();

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.listen(porta, mostraPorta)


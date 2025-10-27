const mongoose = require('mongoose')
require('dotenv').config(MONGO_URL)

async function conectaBancoDeDados(){
    try {
        console.log('Conexão com o banco de dados foi iniciada')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com o banco de dados foi realizada com sucesso')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
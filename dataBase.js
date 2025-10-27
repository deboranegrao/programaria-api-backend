const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciada')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conectado ao banco de dados com sucesso!')
    } catch (erro) {
        console.log('Erro ao conectar ao banco de dados:', erro)
    }

module.exports = conectaBancoDeDados
}
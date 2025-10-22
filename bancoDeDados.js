const mongoose = require('mongoose')

async function conectaBancoDeDados(){
    try {
        console.log('Conexão com o banco de dados foi iniciada')

        await mongoose.connect('mongodb+srv://dafn0029_db_user:m3WiLb4bI1oHuKxl@clustermulheres.zkpbr06.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')

        console.log('Conexão com o banco de dados foi realizada com sucesso')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
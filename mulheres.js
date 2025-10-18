const express = require('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira rota

const app = express() //aqui estou iniciando o app
const porta = 3333 //aqui estou criando a porta

//aqui estou criando um array com a lista inicial de mulheres
const mulheres = [
    {
        id: 1,
        nome: 'Debora',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQGL_64iRYaiyQ/profile-displayphoto-shrink_800_800/B56ZPXmseKGsAc-/0/1734489067499?e=1763596800&v=beta&t=v93X4aNvCkao2esogOwDzpREbcr9QTG239',
        minibio: 'Service Standards Specialist'
    },

    {
        id: 2,
        nome: 'Maria',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH1X1nVbXK6xg/profile-displayphoto-shrink_800_800/0/1678886327511?e=1701302400&v=beta&t=Zk2fX4p3k3nE3O2b8k9YtYI3jU1g5r7r8H3F4JfJz0g',
        minibio: 'Software Engineer'
    },

    {
        id: 3,
        nome: 'Nina',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH1X1nVbXK6xg/profile-displayphoto-shrink_800_800/0/1678886327511?e=1701302400&v=beta&t=Zk2fX4p3k3nE3O2b8k9YtYI3jU1g5r7r8H3F4JfJz0g',
        minibio: 'Hacker antirracista'
    }
]

//GET
function mostraMulheres(request, response){
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: '',
        nome: '',
        imagem: '',
        minibio: ''

}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta
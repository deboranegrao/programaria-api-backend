const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Debora',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQGL_64iRYaiyQ/profile-displayphoto-shrink_800_800/B56ZPXmseKGsAc-/0/1734489067499?e=1763596800&v=beta&t=v93X4aNvCkao2esogOwDzpREbcr9QTG239',
        minibio: 'Service Standards Specialist'
    },

    {
        nome: 'Maria',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH1X1nVbXK6xg/profile-displayphoto-shrink_800_800/0/1678886327511?e=1701302400&v=beta&t=Zk2fX4p3k3nE3O2b8k9YtYI3jU1g5r7r8H3F4JfJz0g',
        minibio: 'Software Engineer'
    },

    {
        nome: 'Nina',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH1X1nVbXK6xg/profile-displayphoto-shrink_800_800/0/1678886327511?e=1701302400&v=beta&t=Zk2fX4p3k3nE3O2b8k9YtYI3jU1g5r7r8H3F4JfJz0g',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
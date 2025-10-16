const express = require('express')

const router = express.Router()
const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

function mostraMulher(request, response){
    response.json({
        nome: 'Debora',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQGL_64iRYaiyQ/profile-displayphoto-shrink_800_800/B56ZPXmseKGsAc-/0/1734489067499?e=1763596800&v=beta&t=v93X4aNvCkao2esogOwDzpREbcr9QTG239',
        minibio: 'Service Standards Specialist'
    })
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)


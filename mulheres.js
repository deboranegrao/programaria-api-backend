const express = require('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira rota
const { v4 : uuidv4 } = require('uuid') //aqui estou iniciando o uuid para criar ids únicos

const conectaBancoDeDados = require('./bancoDeDados') //aqui estou puxando a conexão com o banco de dados
conectaBancoDeDados() //aqui estou conectando com o banco de dados

const app = express() //aqui estou iniciando o app
app.use(express.json()) //aqui estou dizendo para o express usar json
const porta = 3333 //aqui estou criando a porta

//aqui estou criando um array com a lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Debora',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQGL_64iRYaiyQ/profile-displayphoto-shrink_800_800/B56ZPXmseKGsAc-/0/1734489067499?e=1763596800&v=beta&t=v93X4aNvCkao2esogOwDzpREbcr9QTG239',
        minibio: 'Service Standards Specialist'
    },

    {
        id: '2',
        nome: 'Maria',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQH1X1nVbXK6xg/profile-displayphoto-shrink_800_800/0/1678886327511?e=1701302400&v=beta&t=Zk2fX4p3k3nE3O2b8k9YtYI3jU1g5r7r8H3F4JfJz0g',
        minibio: 'Software Engineer'
    },

    {
        id: '3',
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
        id: uuidv4(), //aqui estou criando um id único para cada nova mulher
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulherEncontrada)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if (mulher.id !== request.params.id) {
            return mulher
        }

    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

router.get('/mulheres', mostraMulheres)
router.post('/mulheres', criaMulher)
router.patch('/mulheres/:id', corrigeMulher)
router.delete('/mulheres/:id', deletaMulher)

app.use(router)
app.listen(porta, mostraPorta)
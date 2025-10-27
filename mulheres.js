const express = require('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira rota

const conectaBancoDeDados = require('./bancoDeDados') //aqui estou puxando a conexão com o banco de dados
conectaBancoDeDados() //aqui estou conectando com o banco de dados

const Mulher = require('./mulherModel') //aqui estou puxando o modelo mulher
const app = express() //aqui estou iniciando o app
app.use(express.json()) //aqui estou dizendo para o express usar json
const porta = 3333 //aqui estou criando a porta

//GET
async function mostraMulheres(request, response){
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find() //aqui estou buscando todas as mulheres no banco de dados
        
        response.json(mulheresVindasDoBancoDeDados) //aqui estou retornando as mulheres em formato json
    }catch(erro){
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try{
        const mulherCriada = await novaMulher.save() //aqui estou salvando a nova mulher no banco de dados
        response.status(201).json(mulherCriada) //aqui estou retornando a nova mulher em formato json com o status 201
    }catch(erro){
        console.log(erro)
    } 
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
        }

        if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
        mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso!' })
    } catch (erro) {
        console.log(erro)
    }
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
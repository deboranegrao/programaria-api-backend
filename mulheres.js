const express = require('express'); // Iniciando o Express
const router = express.Router(); // Configurando o roteador
const cors = require('cors'); // Importando CORS
const conectaBancoDeDados = require('./dataBase'); // Conexão com o banco de dados
const Mulher = require('./mulherModel'); // Importando o modelo Mulher

// 🔹 Conecta ao banco de dados
conectaBancoDeDados();

const app = express();
app.use(express.json()); // Habilita JSON no body
app.use(cors()); // Libera CORS para o front-end

const porta = process.env.PORT || 3333; // ✅ Usa a variável de ambiente PORT se estiver em produção

// ✅ Rota GET - lista todas as mulheres
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();
    response.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    console.error('Erro ao buscar mulheres:', erro);
    response.status(500).json({ erro: 'Erro ao buscar mulheres' });
  }
}

// ✅ Rota POST - cria nova mulher
async function criaMulher(request, response) {
  const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });

  try {
    const mulherCriada = await novaMulher.save();
    response.status(201).json(mulherCriada);
  } catch (erro) {
    console.error('Erro ao criar mulher:', erro);
    response.status(400).json({ erro: 'Erro ao criar mulher' });
  }
}

// ✅ Rota PATCH - atualiza uma mulher específica
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);
    if (!mulherEncontrada) {
      return response.status(404).json({ erro: 'Mulher não encontrada' });
    }

    // Atualiza apenas os campos enviados
    Object.assign(mulherEncontrada, request.body);

    const mulherAtualizada = await mulherEncontrada.save();
    response.json(mulherAtualizada);
  } catch (erro) {
    console.error('Erro ao atualizar mulher:', erro);
    response.status(400).json({ erro: 'Erro ao atualizar mulher' });
  }
}

// ✅ Rota DELETE - deleta uma mulher
async function deletaMulher(request, response) {
  try {
    const mulherDeletada = await Mulher.findByIdAndDelete(request.params.id);
    if (!mulherDeletada) {
      return response.status(404).json({ erro: 'Mulher não encontrada' });
    }

    response.json({ mensagem: 'Mulher deletada com sucesso!' });
  } catch (erro) {
    console.error('Erro ao deletar mulher:', erro);
    response.status(400).json({ erro: 'Erro ao deletar mulher' });
  }
}

// 🔹 Registra as rotas
router.get('/mulheres', mostraMulheres);
router.post('/mulheres', criaMulher);
router.patch('/mulheres/:id', corrigeMulher);
router.delete('/mulheres/:id', deletaMulher);

app.use(router);

// 🔹 Inicia o servidor
app.listen(porta, () => console.log(`🚀 Servidor rodando na porta ${porta}`));

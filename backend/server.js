const express = require('express');
const fs = require('fs');
const { OpenAI } = require('openai'); // Biblioteca atualizada
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Adicionado para lidar com dados de formulários
app.use(express.json());
app.use(express.static('frontend')); // Adicionado para servir arquivos estáticos

const funcionarios = JSON.parse(fs.readFileSync('./data/funcionarios.json'));
const ferias = JSON.parse(fs.readFileSync('./data/ferias.json'));

// Configuração da nova API da OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Simula consulta ao RM RH
app.get('/funcionario/:id', (req, res) => {
    const func = funcionarios.find(f => f.id == req.params.id);
    if (!func) return res.status(404).json({ erro: "Funcionário não encontrado" });
    res.json(func);
});

// IA sugere datas
app.post('/sugestao-ferias', async (req, res) => {
    try {
        const { id } = req.body;
        const func = funcionarios.find(f => f.id == id);

        if (!func) {
            return res.status(404).json({ erro: "Funcionário não encontrado" });
        }

        const historico = ferias.filter(f => f.departamento === func.departamento);

        const prompt = `
            Você é um assistente de RH. Com base no histórico de férias da equipe abaixo, sugira
            as melhores datas para que o funcionário ${func.nome} tire férias sem sobrecarregar o time.

            Histórico:
            ${JSON.stringify(historico, null, 2)}
        `;

        const resposta = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Modelo atualizado
            messages: [{ role: "user", content: prompt }],
            max_tokens: 150
        });

        res.json({ sugestao: resposta.choices[0].message.content.trim() });

    } catch (error) {
        console.error("Erro na rota de sugestão de férias:", error);
        res.status(500).json({ erro: "Erro interno do servidor ao gerar sugestão." });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
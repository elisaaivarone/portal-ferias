Portal de Solicitação de Férias Inteligente
Este projeto é uma simulação prática de um sistema web para solicitação de férias, que integra um portal de colaboradores (estilo Fluig), um sistema de RH (RM) e inteligência artificial para otimizar o processo. Ele demonstra como seria a integração entre essas tecnologias em um ambiente corporativo.

🎯 Objetivo
O sistema tem como finalidade:

Portal Fluig (Simulado): Oferecer uma interface web para que o funcionário possa interagir e fazer a solicitação.

RM RH (Simulado): Um backend que gerencia os dados dos funcionários e o histórico de férias através de uma API.

Módulo de IA: Analisar o histórico de férias da equipe para sugerir datas ideais, evitando sobrecarga na equipe.

🛠️ Tecnologias Utilizadas
Frontend: HTML, CSS (com layout inspirado no Fluig) e JavaScript puro.

Backend: Node.js com Express para a criação da API.

Dados: Arquivos JSON para simular o banco de dados.

Inteligência Artificial: API da OpenAI para gerar sugestões.

📂 Estrutura do Projeto
portal-ferias/
├── backend/
│   ├── server.js             # API Node.js (integração RM RH e IA)
│   ├── data/funcionarios.json  # Dados simulados de funcionários
│   ├── data/ferias.json        # Histórico de férias simulado
│   └── .env                  # Variáveis de ambiente (chave da API)
├── frontend/
│   ├── index.html            # Estrutura HTML do portal
│   ├── style.css             # Estilização (visual Fluig)
│   └── script.js             # Lógica do frontend para comunicação com a API
└── README.md                 # Documentação do projeto

🚀 Como Executar o Projeto
Siga os passos abaixo para colocar o projeto no ar:

1. Configuração do Backend
Navegue até a pasta backend/ no seu terminal.

Instale as dependências do projeto:

npm install express openai cors dotenv

Crie um arquivo chamado .env na pasta backend/ e adicione sua chave da API da OpenAI.

OPENAI_API_KEY=sua_chave_da_openai_aqui

⚠️ Importante: Certifique-se de que sua conta na OpenAI tem cota de uso disponível.

Inicie o servidor Node.js:

node server.js

O servidor estará rodando em http://localhost:3000.

2. Execução do Frontend
Abra o arquivo index.html em seu navegador.

Recomendado: Utilize uma extensão como o Live Server do VS Code para executá-lo. Isso evita problemas de CORS e recarrega a página automaticamente ao salvar as alterações.

💡 Como Funciona
Consulta de Funcionário: Ao inserir um ID, o frontend envia uma requisição GET para a rota /funcionario/:id do backend, que busca os dados do funcionário.

Sugestão da IA: Após os dados serem exibidos, ao clicar em "Sugerir Datas de Férias", o frontend faz uma requisição POST para /sugestao-ferias.

Análise e Resposta: O backend recebe o ID, busca o histórico de férias do departamento correspondente, monta um prompt e o envia para a API da OpenAI. A resposta da IA é então retornada e exibida na tela.
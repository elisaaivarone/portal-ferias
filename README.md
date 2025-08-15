
# 🚀 Portal de Solicitação de Férias Inteligente


Este projeto é uma simulação prática de um sistema web que integra um portal de colaboradores (estilo Fluig), um sistema de RH (RM) e inteligência artificial para otimizar o processo de solicitação de férias. O objetivo é demonstrar a capacidade de criar soluções integradas e inteligentes em um ambiente corporativo.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Como Funciona](#-como-funciona)


---

## 📖 Sobre o Projeto
  
O objetivo é facilitar tarefas repetitivas, fornecer respostas rápidas a dúvidas e automatizar fluxos internos.

---

## ✨ Funcionalidades

- 🤖 Respostas automáticas baseadas em IA para solicitações internas.
- 📄 Análise de documentos e extração de informações.
- 📊 Geração de relatórios inteligentes.
- 🔍 Pesquisa otimizada dentro da plataforma.

---

## 🛠 Tecnologias Utilizadas


- **JavaScript / TypeScript**
- **Node.js**
- **API de Inteligência Artificial** (ex.: OpenAI API)
- **HTML5 / CSS3**
- **REST API**
- **Git e GitHub**

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Conta e credenciais de acesso ao **Fluig**
- Chave de API da IA utilizada

---

## 📥 Instalação

```bash
# Clone este repositório
git clone https://github.com/elisaaivarone/portal-ferias.git

# Acesse a pasta do projeto
cd portal-ferias

# Instale as dependências
npm install
```

## ▶️ Uso

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

## 💡 Como Funciona

**Consulta de Funcionário:** Ao inserir um ID, o frontend envia uma requisição GET para a rota /funcionario/:id do backend, que busca os dados do funcionário.

**Sugestão da IA:** Após os dados serem exibidos, ao clicar em "Sugerir Datas de Férias", o frontend faz uma requisição POST para /sugestao-ferias.

**Análise e Resposta:** O backend recebe o ID, busca o histórico de férias do departamento correspondente, monta um prompt e o envia para a API da OpenAI. A resposta da IA é então retornada e exibida na tela.

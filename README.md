 Desafio Técnico - Chat App
Este projeto foi desenvolvido individualmente como parte de um desafio técnico. Trata-se de uma aplicação de chat com histórico, onde o usuário pode enviar mensagens e visualizar o fluxo da conversa, com backend em Node.js e frontend em React.

 Funcionalidades
Envio de mensagens com histórico

Diferenciação de mensagens entre usuário e sistema

Resposta automática do sistema (mockada)

Integração completa entre frontend e backend via API REST

Armazenamento em banco de dados PostgreSQL

Testes unitários nas principais funcionalidades de back e front

 Arquitetura do Projeto
 Backend (/backend)
Construído com Node.js, Express, Sequelize e PostgreSQL.

Estrutura:

backend/
├── config/                # Configurações do Sequelize
├── controllers/           # Lógica de controle (ex: messagesController.js)
├── migrations/            # Migrations do banco com Sequelize
├── models/                # Definição dos modelos (ex: message.js)
├── routes/                # Definição das rotas da API
├── services/              # Lógica de negócio (ex: messagesService.js)
│   └── *.test.js          # Testes unitários dos serviços
├── .env                   # Variáveis de ambiente (ex: DATABASE_URL)
├── app.js                 # Entrada principal do backend


 Frontend (/frontend)
Construído com React.js + Material UI 14.

Estrutura:

frontend/
├── public/                # HTML principal
├── src/
│   ├── components/        # Componentes reutilizáveis da interface
│   │   └── *.test.jsx     # Testes dos componentes
│   ├── pages/             # Páginas principais da aplicação
│   ├── services/          # Integração com a API (axios)
│   ├── styles/            # Tema personalizado
│   └── App.js / index.js  # Entrada do React

🔗 Tecnologias Utilizadas
Frontend: React, Material UI, Axios, Jest

Backend: Node.js, Express, Sequelize, PostgreSQL

Banco: Railway (PostgreSQL hospedado)

Hospedagem:

Frontend: Render (Static Site)

Backend: Render (Web Service)

 Testes
O projeto inclui testes unitários tanto no frontend quanto no backend.

O objetivo foi garantir a confiabilidade das principais funções (como envio de mensagem e renderização dos componentes).

 Possíveis Evoluções Futuras
Se o projeto fosse levado adiante, algumas ideias para expansão seriam:

Chatbot com IA Generativa, utilizando modelos como GPT para responder com base no conteúdo do usuário.

Integração com serviços de NLP, como OpenAI API ou Vertex AI da Google.

Hospedagem profissional em nuvem robusta (como Oracle Cloud ou AWS), com escalabilidade real.

Design moderno e responsivo, com animações, acessibilidade e dark mode.

Armazenamento de arquivos, transcrição de voz e envio de mídia.


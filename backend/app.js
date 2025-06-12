require('dotenv').config();
const express =require('express');
const cors = require('cors');
const {Sequelize} = require('sequelize');
const db = require('./models');
const app= express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const messagesRouter =require('./routes/messages');
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

db.sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados Postgres com sucesso!');
    return db.sequelize.sync();  
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

const messagesRouter = require('./routes/messages');
app.use('/messages', messagesRouter);

db.sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados Postgres com sucesso!');
    return db.sequelize.sync();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando localmente na porta ${PORT}`);
  });
}

module.exports = app;

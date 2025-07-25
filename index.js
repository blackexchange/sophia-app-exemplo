const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sophia_exemplo';

app.use(express.json());

// Modelo de exemplo
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String
}));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Node.js com MongoDB está funcionando!');
});

// Rota para criar usuário
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar usuários
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Conexão com MongoDB e inicialização do servidor
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  }); 
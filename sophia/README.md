# App de Exemplo Node.js + MongoDB

Este é um app de exemplo usando Node.js, Express e MongoDB (via Mongoose).

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Configure a string de conexão com o MongoDB (opcional):

Por padrão, o app conecta em `mongodb://localhost:27017/sophia_exemplo`. Para usar outro banco, defina a variável de ambiente `MONGO_URI`.

3. Inicie o servidor:

```bash
npm start
```

O servidor irá rodar na porta 3000 (ou na porta definida pela variável de ambiente `PORT`).

## Rotas disponíveis

- `GET /` — Teste, retorna mensagem simples
- `POST /users` — Cria um usuário (enviar JSON `{ "name": "Nome", "email": "email@exemplo.com" }`)
- `GET /users` — Lista todos os usuários

---

Pronto para deploy em qualquer servidor Node.js! 
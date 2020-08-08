import express from 'express';

const app: express.Application = express();

app.use(express.json());

app.get('/', (req, res) => {
  const users: Array<object> = [
    { nome: 'Murilo', idade: 21 },
    { nome: 'Marcela', idade: 16 },
  ];

  return res.json(users);
});

export default app;

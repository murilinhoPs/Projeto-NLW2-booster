import { Router } from 'express';
import db from './database/connection';

const router = Router();

router.get('/', (req, res) => {
  const users: Array<object> = [
    { nome: 'Murilo', idade: 21 },
    { nome: 'Marcela', idade: 16 },
  ];

  return res.json(users);
});

router.post('/lessons', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = req.body;

  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  console.log(whatsapp);

  return res.send();
});

export default router;

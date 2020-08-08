import express from 'express';
import router from './routes';

const app: express.Application = express();

app.use(express.json());

app.use(router);

export default app;

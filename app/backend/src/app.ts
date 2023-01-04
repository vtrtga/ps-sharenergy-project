import express from 'express';
import LoginRouter from './routers/LoginRouter';

const app = express();
app.use(express.json());
app.use('/login', LoginRouter);

export default app;
import express from 'express';
import CustomerRouter from './routers/CustomerRouter';
import LoginRouter from './routers/LoginRouter';

const app = express();
app.use(express.json());
app.use('/login', LoginRouter);
app.use('/customer', CustomerRouter);

export default app;
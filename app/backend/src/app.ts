import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import CustomerRouter from './routers/CustomerRouter';
import LoginRouter from './routers/LoginRouter';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/login', LoginRouter);
app.use('/customer', CustomerRouter);

export default app;
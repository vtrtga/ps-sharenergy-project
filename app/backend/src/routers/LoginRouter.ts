import { Router } from 'express';
import LoginController from '../Controllers/LoginController';

const LoginRouter = Router();

LoginRouter.post('/', (req, res, next) => new LoginController(req, res, next).handleLogin());

export default LoginRouter;
import { NextFunction, Request, Response } from 'express';
import tokenGenerator from '../utils/TokenGenerator';
import LoginService from '../Services/LoginService';

export default class LoginController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: LoginService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new LoginService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async handleLogin() {
    try {
      const { body } = this.req;
      const user = await this.service.login(body);

      if (body.password !== user?.password) {
        throw new Error('Invalid username or password');
      } 

      const token = tokenGenerator(body.username);

      return this.res.status(200).json({ token });
    } catch (e) {
      return this.res.status(401).json({ message: 'Invalid username or password' });
    }
  }
}
import { NextFunction, Request, Response } from 'express';
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
    const { username } = this.req.body;
    const user = await this.service.login(username);

    return this.res.status(200).json(user);
  }
}
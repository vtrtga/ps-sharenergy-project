import { NextFunction, Request, Response } from 'express';
import CustomerService from '../Services/CustomerService';

export default class CustomerController {
  private service: CustomerService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new CustomerService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async removeCustomer() {
    try {
      const { id } = this.req.params;
       await this.service.remove(id);

      return this.res.status(202).json({message: 'User has been removed.'});
    } catch(e) {
      return this.res.status(400).json({ message: e });
    }
  }

  public async updateCustomer() {
    try {
      const { params, body } = this.req;
      await this.service.update(params.id, body);

      return this.res.status(204).json({ message: `User with id ${params.id} updated successfully:` });
    }catch(e) {
      return this.res.status(400).json({ message: e });
    }
  }

  public async createCustomer() {
    try {
      const { body } = this.req;
      const newCustomer = await this.service.create(body);
      return this.res.status(201).json(newCustomer);
    } catch (e) {
      this.next(e);
    }
  }

  public async getAllCustomers() {
    try {
      const customers = await this.service.getAll(); 
      return this.res.status(200).json(customers);
    } catch (e) {
      this.next(e);
    }
  }
}
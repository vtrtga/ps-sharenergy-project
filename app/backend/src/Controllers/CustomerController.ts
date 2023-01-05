import { NextFunction, Request, Response } from "express";
import ICustomer from "../Interfaces/ICustomer";
import CustomerService from "../Services/CustomerService";

export default class CustomerController {
  private service: CustomerService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new CustomerService();
  }

  createCustomer(): Response {
    const { body } = this.req;
    const newCustomer = this.service.create(body);

    return this.res.status(201).json(newCustomer);
  }

  getAllCustomers(): Response {
    const customers = this.service.getAll();

    return this.res.status(200).json(customers);
  }
}
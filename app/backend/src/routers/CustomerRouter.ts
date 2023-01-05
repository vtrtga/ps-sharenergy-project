import { NextFunction, Request, Response, Router } from "express";
import CustomerController from "../Controllers/CustomerController";

const CustomerRouter = Router();

CustomerRouter.post('/', (req, res, next) => new CustomerController(req, res, next).createCustomer());

export default CustomerRouter;
import { Router } from "express";
import CustomerController from "../Controllers/CustomerController";

const CustomerRouter = Router();

CustomerRouter.post('/', (req, res, next) => new CustomerController(req, res, next).createCustomer());
CustomerRouter.get('/', (req, res, next) => new CustomerController(req, res, next).getAllCustomers());

export default CustomerRouter;
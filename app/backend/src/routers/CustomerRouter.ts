/* eslint-disable max-len */
import { Router } from 'express';
import tokenValidator from '../middlewares/TokenValidator';
import CustomerController from '../Controllers/CustomerController';

const CustomerRouter = Router();

CustomerRouter.post('/', tokenValidator, (req, res, next) => new CustomerController(req, res, next).createCustomer());
CustomerRouter.get('/', tokenValidator, (req, res, next) => new CustomerController(req, res, next).getAllCustomers());

export default CustomerRouter;
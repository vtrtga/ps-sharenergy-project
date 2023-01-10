/* eslint-disable max-len */
import { Router } from 'express';
import tokenValidator from '../middlewares/TokenValidator';
import CustomerController from '../Controllers/CustomerController';
import newCustomerValidation from '../middlewares/InputValidation';

const CustomerRouter = Router();

CustomerRouter.post('/', newCustomerValidation, tokenValidator, (req, res, next) => new CustomerController(req, res, next).createCustomer());
CustomerRouter.get('/', tokenValidator, (req, res, next) => new CustomerController(req, res, next).getAllCustomers());
CustomerRouter.delete('/:id', tokenValidator, (req, res, next) => new CustomerController(req, res, next).removeCustomer());
export default CustomerRouter;
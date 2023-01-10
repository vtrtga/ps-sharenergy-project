"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const express_1 = require("express");
const TokenValidator_1 = __importDefault(require("../middlewares/TokenValidator"));
const CustomerController_1 = __importDefault(require("../Controllers/CustomerController"));
const InputValidation_1 = __importDefault(require("../middlewares/InputValidation"));
const CustomerRouter = (0, express_1.Router)();
CustomerRouter.post('/', InputValidation_1.default, TokenValidator_1.default, (req, res, next) => new CustomerController_1.default(req, res, next).createCustomer());
CustomerRouter.get('/', TokenValidator_1.default, (req, res, next) => new CustomerController_1.default(req, res, next).getAllCustomers());
CustomerRouter.delete('/:id', TokenValidator_1.default, (req, res, next) => new CustomerController_1.default(req, res, next).removeCustomer());
exports.default = CustomerRouter;
//# sourceMappingURL=CustomerRouter.js.map
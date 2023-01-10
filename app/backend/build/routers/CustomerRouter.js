"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const express_1 = require("express");
const TokenValidator_1 = __importDefault(require("../middlewares/TokenValidator"));
const CustomerController_1 = __importDefault(require("../Controllers/CustomerController"));
const CustomerRouter = (0, express_1.Router)();
CustomerRouter.post('/', TokenValidator_1.default, (req, res, next) => new CustomerController_1.default(req, res, next).createCustomer());
CustomerRouter.get('/', TokenValidator_1.default, (req, res, next) => new CustomerController_1.default(req, res, next).getAllCustomers());
exports.default = CustomerRouter;
//# sourceMappingURL=CustomerRouter.js.map
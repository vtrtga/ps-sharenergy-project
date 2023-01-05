"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerService_1 = __importDefault(require("../Services/CustomerService"));
class CustomerController {
    constructor(req, res, next) {
        this.service = new CustomerService_1.default();
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map
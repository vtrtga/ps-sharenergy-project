"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerService_1 = __importDefault(require("../Services/CustomerService"));
class CustomerController {
    constructor(req, res, next) {
        this.service = new CustomerService_1.default();
        this.req = req;
        this.res = res;
        this.next = next;
    }
    createCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = this.req;
                const newCustomer = yield this.service.create(body);
                return this.res.status(201).json(newCustomer);
            }
            catch (e) {
                this.next(e);
            }
        });
    }
    getAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customers = yield this.service.getAll();
                return this.res.status(200).json(customers);
            }
            catch (e) {
                this.next(e);
            }
        });
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map
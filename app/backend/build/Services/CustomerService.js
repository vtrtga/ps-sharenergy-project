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
const Customer_1 = __importDefault(require("../Domains/Customer"));
const CustomerODM_1 = __importDefault(require("../Models/CustomerODM"));
class CustomerService {
    constructor() {
        this.customerODM = new CustomerODM_1.default();
    }
    createCustomerDomain(customer) {
        if (customer) {
            return new Customer_1.default(customer);
        }
        return null;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerODM.getAll();
            const customersArr = customers.map((customer) => this.createCustomerDomain(customer));
            return customersArr;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteC = yield this.customerODM.deleteById(id);
            return deleteC;
        });
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerODM.create(obj);
            return this.createCustomerDomain(customer);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCustomer = yield this.customerODM.updateById(id, data);
            if (updatedCustomer)
                return this.createCustomerDomain(updatedCustomer);
            return null;
        });
    }
}
exports.default = CustomerService;
//# sourceMappingURL=CustomerService.js.map
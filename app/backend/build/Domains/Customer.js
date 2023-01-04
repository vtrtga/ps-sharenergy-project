"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Customer extends Person_1.default {
    constructor(costumer) {
        super(costumer);
        this.email = costumer.email;
        this.cpf = costumer.cpf;
        this.phone = costumer.phone;
        this.address = costumer.address;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map
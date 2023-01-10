"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = __importDefault(require("./AbstractODM"));
class CustomerODM extends AbstractODM_1.default {
    constructor() {
        const schema = new mongoose_1.Schema({
            birthDate: { type: String, required: true },
            name: { type: String, required: true },
            gender: { type: String, required: false },
            phone: { type: String, required: true },
            email: { type: String, required: true },
            cpf: { type: String, required: true },
            address: { type: String, required: true },
        }, { collection: 'customer' });
        super('customer', schema);
    }
}
exports.default = CustomerODM;
//# sourceMappingURL=CustomerODM.js.map
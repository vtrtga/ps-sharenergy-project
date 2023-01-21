"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const newCustomerSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    birthDate: joi_1.default.string().required(),
    gender: joi_1.default.string().allow(''),
    cpf: joi_1.default.string().required(),
});
exports.default = newCustomerSchema;
//# sourceMappingURL=newCustomerSchema.js.map
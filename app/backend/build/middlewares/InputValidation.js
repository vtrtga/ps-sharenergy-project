"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newCustomerSchema_1 = __importDefault(require("./JoiSchemas/newCustomerSchema"));
const newCustomerValidation = (req, res, next) => {
    const { error } = newCustomerSchema_1.default.validate(req.body);
    if (error) {
        return res.status(401).json({ message: error.details[0].message });
    }
    next();
};
exports.default = newCustomerValidation;
//# sourceMappingURL=InputValidation.js.map
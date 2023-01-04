"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = __importDefault(require("./AbstractODM"));
class UserODM extends AbstractODM_1.default {
    constructor() {
        const schema = new mongoose_1.Schema({
            model: { type: String, required: true },
            birthDate: { type: String, required: true },
            gender: { type: String, required: false },
            name: { type: String, required: true },
            username: { type: String, required: true },
            password: { type: String, required: true },
        });
        super('user', schema);
    }
}
exports.default = UserODM;
//# sourceMappingURL=UserODM.js.map
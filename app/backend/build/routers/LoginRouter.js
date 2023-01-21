"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../Controllers/LoginController"));
const LoginRouter = (0, express_1.Router)();
LoginRouter.post('/', (req, res, next) => new LoginController_1.default(req, res, next).handleLogin());
exports.default = LoginRouter;
//# sourceMappingURL=LoginRouter.js.map
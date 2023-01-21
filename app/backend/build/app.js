"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const CustomerRouter_1 = __importDefault(require("./routers/CustomerRouter"));
const LoginRouter_1 = __importDefault(require("./routers/LoginRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use('/login', LoginRouter_1.default);
app.use('/customer', CustomerRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
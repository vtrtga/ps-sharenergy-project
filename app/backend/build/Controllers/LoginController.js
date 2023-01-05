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
const LoginService_1 = __importDefault(require("../Services/LoginService"));
class LoginController {
    constructor(req, res, next) {
        this.service = new LoginService_1.default();
        this.req = req;
        this.res = res;
        this.next = next;
    }
    handleLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = this.req;
            const user = yield this.service.login(body);
            return this.res.status(200).json(user);
        });
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map
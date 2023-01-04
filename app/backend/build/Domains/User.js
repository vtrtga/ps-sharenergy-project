"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class User extends Person_1.default {
    constructor(user) {
        super(user);
        this.username = user.username;
        this.password = user.password;
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map
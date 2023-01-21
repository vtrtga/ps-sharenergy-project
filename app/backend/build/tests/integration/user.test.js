"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai_1 = __importStar(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const chai_http_1 = __importDefault(require("chai-http"));
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("../../app"));
const userMock_1 = require("./mocks/userMock");
chai_1.default.use(chai_http_1.default);
describe('Testing user route', function () {
    let chaiHttpResponse;
    it('Test if is possible to login', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(mongoose_1.Model, 'findOne').resolves(userMock_1.userMock);
            chaiHttpResponse = yield chai_1.default
                .request(app_1.default)
                .post('/login')
                .send({
                username: 'desafiosharenergy',
                password: 'sh@r3n3rgy',
            });
            (0, chai_1.expect)(chaiHttpResponse.status).to.be.eq(200);
            sinon_1.default.restore();
        });
    });
    it('Test if is not possible to login with invalid credentials', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(mongoose_1.Model, 'findOne').resolves();
            chaiHttpResponse = yield chai_1.default
                .request(app_1.default)
                .post('/login')
                .send(userMock_1.invalidCretendialsMock);
            (0, chai_1.expect)(chaiHttpResponse.status).to.be.eq(401);
        });
    });
});
//# sourceMappingURL=user.test.js.map
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
/* eslint-disable mocha/no-async-describe */
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const sinon_1 = __importDefault(require("sinon"));
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("../../app"));
const TokenGenerator_1 = __importDefault(require("../../utils/TokenGenerator"));
const CustomersMock_1 = __importDefault(require("./mocks/CustomersMock"));
chai_1.default.use(chai_http_1.default);
describe('Testing customer route', function () {
    let chaiHttpResponse;
    const customerOutput = {
        id: '63b875c6a8fc92f32f7d7ec7',
        birthDate: '11/02/1979',
        gender: 'female',
        email: 'camila@serrano.com',
        cpf: '423.296.910-17',
        phone: '11-99921-4321',
        address: 'Rua 24, casa 1000, Jardim das Palmeiras',
    };
    const customerInput = {
        name: 'Camila Serrano',
        birthDate: '11/02/1979',
        gender: 'female',
        email: 'camila@serrano.com',
        cpf: '423.296.910-17',
        phone: '11-99921-4321',
        address: 'Rua 24, casa 1000, Jardim das Palmeiras',
    };
    it('Should create a customer', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(mongoose_1.Model, 'create').resolves(customerOutput);
            const token = (0, TokenGenerator_1.default)('desafiosharenergy2');
            chaiHttpResponse = yield chai_1.default
                .request(app_1.default)
                .post('/customer')
                .set('authorization', token)
                .send(customerInput);
            (0, chai_1.expect)(chaiHttpResponse.status).to.be.eq(201);
            sinon_1.default.restore();
        });
    });
    it('Must return an customers array', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(mongoose_1.Model, 'find').resolves(CustomersMock_1.default);
            const token = (0, TokenGenerator_1.default)('desafiosharenergy2');
            chaiHttpResponse = yield chai_1.default
                .request(app_1.default)
                .get('/customer')
                .set('authorization', token);
            (0, chai_1.expect)(chaiHttpResponse.status).to.be.eq(200);
            sinon_1.default.restore();
        });
    });
    it('Must return an authorization error', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(mongoose_1.Model, 'find').resolves();
            chaiHttpResponse = yield chai_1.default
                .request(app_1.default)
                .get('/customer');
            (0, chai_1.expect)(chaiHttpResponse.status).to.be.eq(401);
        });
    });
});
//# sourceMappingURL=customer.test.js.map
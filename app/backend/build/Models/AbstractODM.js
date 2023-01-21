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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class AbstractODM {
    constructor(modelName, schema) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = mongoose_1.models[this.modelName] || (0, mongoose_1.model)(this.modelName, this.schema);
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(Object.assign({}, obj));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById({
                _id: id,
            });
        });
    }
    updateById(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const validId = (0, mongoose_1.isValidObjectId)(id);
            if (!validId)
                throw new Error('Invalid ID');
            return yield this.model.findByIdAndUpdate({ _id: id }, Object.assign({}, obj));
        });
    }
    getOne(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne({ username: obj.username });
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.deleteOne({ _id: id });
        });
    }
}
exports.default = AbstractODM;
//# sourceMappingURL=AbstractODM.js.map
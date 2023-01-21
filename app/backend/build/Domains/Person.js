"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(person) {
        this.id = person.id;
        this.birthDate = person.birthDate;
        this.name = person.name;
        this.gender = person.gender;
    }
    setId(id) {
        this.id = id;
    }
    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getName() {
        return this.name;
    }
}
exports.default = Person;
//# sourceMappingURL=Person.js.map
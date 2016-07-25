"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
exports.mainValidator = ZipCodeValidator_1.ZipCodeValidator;
var ZipCodeValidator_2 = require("./ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = ZipCodeValidator_2.ZipCodeValidator;
__export(require("./LettersOnlyValidator"));
const ZipCodeValidator_1 = require("./ZipCodeValidator");
exports.ZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
exports.mainValidator = ZipCodeValidator_1.ZipCodeValidator;
let myValidator = new ZipCodeValidator_1.ZipCodeValidator();
const ZipCodeValidator_3 = require("./ZipCodeValidator");
let myValidatorRneamed = new ZipCodeValidator_3.ZipCodeValidator();
const validator = require("./ZipCodeValidator");
let myValidatorVariable = new validator.ZipCodeValidator();
require("./my-module.js");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JQuery_1.default;
const JQuery_1 = require("JQuery");
JQuery_1.default("button.continue").html("Next Step...");
class Dog {
}
exports.Dog = Dog;
class Cat {
}
exports.Cat = Cat;
class Tree {
}
exports.Tree = Tree;
class Flower {
}
exports.Flower = Flower;
const myLargeModule = require("./MyLargeModule.ts");
let x = new myLargeModule.Dog;

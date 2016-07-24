var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function padLeft(value, padding) {
}
var indentedString = padLeft("Hello world", true);
function getSmallPet() {
}
var pet = getSmallPet();
pet.layEggs();
pet.swim();
function isFish(pet) {
    return pet.swim !== undefined;
}
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var PersonIntersection = (function () {
    function PersonIntersection(name) {
        this.name = name;
    }
    return PersonIntersection;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
var jim = extend(new PersonIntersection("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
var BasicCalculator = (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var basicCalc = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
var ScientificCalculator = (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        _super.call(this, value);
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var scientisCalc = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

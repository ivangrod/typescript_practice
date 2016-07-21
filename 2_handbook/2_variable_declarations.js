function f(input) {
    var a = 100;
    if (input) {
        var b_1 = a + 1;
        return b_1;
    }
    return b;
}
try {
    throw "Oh no!";
}
catch (e) {
    console.log("Oh well.");
}
console.log(e);
aVariable++;
var aVariable;
var x = 10;
var x = 20;
function f(x) {
    var x = 100;
}
function g() {
    var x = 100;
    var x = 100;
}
function func(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
func(false, 0);
func(true, 0);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
var input = [1, 2];
var first = input[0], second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
function dest(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
var _b = [1, 2, 3, 4], firstElem = _b[0], rest = _b.slice(1);
console.log(rest);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
var newName1 = o.a, newName2 = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
var _a;

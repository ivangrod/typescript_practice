var PersonCompatible = (function () {
    function PersonCompatible() {
    }
    return PersonCompatible;
}());
var p;
p = new PersonCompatible();
var xNamed;
var y = { name: "Alice", location: "Seattle" };
xNamed = y;
var xTypeCompatible = function (a) { return 0; };
var yTypeCompatible = function (b, s) { return 0; };
yTypeCompatible = xTypeCompatible;
xTypeCompatible = yTypeCompatible;
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var statusTypeCompatible = Status.Ready;
statusTypeCompatible = Color.Green;
var AnimalTypeCompatible = (function () {
    function AnimalTypeCompatible(name, numFeet) {
    }
    return AnimalTypeCompatible;
}());
var Size = (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var ani;
var s;
ani = s;
s = ani;
var xGeneric;
var yGeneric;
xGeneric = yGeneric;
var xGenericNotEmpty;
var yGenericNotEmpty;
xGenericNotEmpty = yGenericNotEmpty;

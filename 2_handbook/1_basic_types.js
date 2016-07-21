var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var fullName = 'Bob Bobbington';
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
var listGeneric = [1, 2, 3];
var tuple;
tuple = ["hello", 10];
console.log(tuple[0].substr(1));
tuple[3] = "world";
console.log(tuple[5].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var ColorNumber;
(function (ColorNumber) {
    ColorNumber[ColorNumber["Red"] = 1] = "Red";
    ColorNumber[ColorNumber["Green"] = 3] = "Green";
    ColorNumber[ColorNumber["Blue"] = 4] = "Blue";
})(ColorNumber || (ColorNumber = {}));
;
var cn = Color.Green;
var cnvalue = Color[3];
var notSure = 4;
notSure = "Maybe a string instead";
notSure = true;
function warnUser() {
    alert("This is a warning message");
}
var someValue = "This is a string";
var strLength = someValue.length;
var someValueAs = "This is a string";
var strLengthAs = someValueAs.length;

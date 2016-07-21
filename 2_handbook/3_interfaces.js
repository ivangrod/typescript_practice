function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabelWithInterface(labelledObj) {
    console.log(labelledObj.label);
}
var myObjWithInterface = { size: 10, label: "Size 10 Object" };
printLabel(myObjWithInterface);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySquareErrorProperty = createSquare({ colour: "red", width: 100 });
var mySquareWithAssertion = createSquare({ width: 100, opacity: 0.5 });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var ClockWithMethod = (function () {
    function ClockWithMethod(h, m) {
    }
    ClockWithMethod.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return ClockWithMethod;
}());
var ClockError = (function () {
    function ClockError(h, m) {
    }
    return ClockError;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var cnter = getCounter();
cnter(10);
cnter.reset();
cnter.interval = 5.0;

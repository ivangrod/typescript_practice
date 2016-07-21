function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
/*
The printLabel function has a single parameter that requires that the object
passed in has a property called label of type string. Notice that our object
actually has more properties than this, but the compiler only checks that at
least the ones required are present and match the types required.
*/
printLabel(myObj); // The type-checker checks the call to printLabel.

//First Interface

interface ILabelledValue {
    label: string;
}

function printLabelWithInterface(labelledObj: ILabelledValue) {
    console.log(labelledObj.label);
}

let myObjWithInterface = { size: 10, label: "Size 10 Object" };
/*we didn’t have to explicitly say that the object we pass to printLabel
implements this interface like we might have to in other languages.*/
printLabel(myObjWithInterface);

/*
Optional Properties. Not all properties of an interface may be required. These
optional properties are popular when creating patterns like -“option bags”- where
you pass an object to a function that only has a couple of properties filled in.
*/
interface SquareConfig {
    // Interfaces with optional properties are written similar to other interfaces,
    //with each optional property denoted by a ? at the end of the property name in
    // the declaration.
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

/*
Excess property checking.
*/
let mySquareErrorProperty = createSquare({ colour: "red", width: 100 });

//If we use a type assertion:
let mySquareWithAssertion = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// We can use index signature:
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

/*
Function Types. Interfaces are also capable of describing function types
*/

// To describe a function type with an interface, we give the interface a
// call signature. This is like a function declaration with only the parameter
// list and return type given. Each parameter in the parameter list requires
// both name and type.
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

// For function types to correctly type-check, the names of the parameters do
// not need to match.
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}

/*
Indexable Types. Indexable types have an index signature that describes the
types we can use to index into the object, along with the corresponding return
types when indexing.
*/
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// There are two types of supported index signatures: string and number.

/*
Class Types
*/

// Implementing an interface
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// Describe methods in an interface
interface ClockWithMethodInterface {
    currentTime: Date;
    setTime(d: Date);
}

class ClockWithMethod implements ClockWithMethodInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

/*
When working with classes and interfaces, it helps to keep in mind that a class
has two types: the type of the static side and the type of the instance side.
*/
interface ClockConstructorError {
    new (hour: number, minute: number);
}

// when a class implements an interface, only the instance side of the class is
// checked. Since the constructor sits in the static side, it is not included in
// this check.
class ClockError implements ClockConstructorError {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// Instead, you would need to work with the static side of the class directly.
interface ClockConstructor {
    new (hour: number, minute: number): IClockInterface;
}
interface IClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): IClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements IClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements IClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

/*
Extending Interfaces. Like classes, interfaces can extend each other.
*/
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

// An interface can extend multiple interfaces, creating a combination of all of
// the interfaces.
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/*
Hybrid Types. Interfaces can describe the rich types present in real world
JavaScript. Because of JavaScript’s dynamic and flexible nature, you may
occasionally encounter an object that works as a combination of some of the
types described above.
*/
interface Counter{
  (start: number): number;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start:number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let cnter = getCounter();
cnter(10);
cnter.reset();
cnter.interval = 5.0;

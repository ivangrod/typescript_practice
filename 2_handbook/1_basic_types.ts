/******************************************
1- Boolean
******************************************/

/*TypeScript (and ES6) introduces the 'let' keyword to allow you to define
variables with true block scope. That is if you use 'let' instead of 'var' you
get a true unique element disconnected from what you might have defined outside
the scope.
  let foo = 123;
  if (true) {
      let foo = 456;
  }
  console.log(foo); // 123
*/
let isDone: boolean = false;

/******************************************
2- Number. As in JavaScript, all numbers in TypeScript are floating point values.
******************************************/
let decimal: number = 6;
let hex: number = 0xf00d;
//TypeScript also supports binary and octal literals introduced in ECMAScript2015
let binary: number = 0b1010;
let octal: number = 0o744;

/******************************************
3- String. Just like JavaScript, TypeScript also uses double quotes (") or
single quotes (') to surround string data
******************************************/
let color: string = "blue";
color = 'red';

/*
template strings - which can span multiple lines and have embedded expressions.
These strings are surrounded by the backtick/backquote (`) character, and
embedded expressions are of the form ${ expr }
*/
let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`

/******************************************
4- Array
******************************************/
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];//generic array type, Array<elemType>

/******************************************
5- Tuple. Tuple types allow you to express an array where the type of a fixed
number of elements is known, but need not be the same.
******************************************/
let tuple: [string, number]; // Declare a tuple type
tuple = ["hello", 10]; // Initialize it
// Compile Error -> tuple = [10, "tuple"]; // // Initialize it incorrectly

// When accessing an element with a known index, the correct type is retrieved:
console.log(tuple[0].substr(1));
// Compile Error -> console.log(tuple[1].substr(1)); // Error, 'number' does not have 'substr'

// When accessing an element outside the set of known indices, a union type is
// used instead:
tuple[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(tuple[5].toString()); // OK, 'string' and 'number' both have 'toString'
// Compile Error -> tuple[6] = true; // Error, 'boolean' isn't 'string | number'

/******************************************
6- Enum. A helpful addition to the standard set of datatypes from JavaScript
******************************************/
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

/*
By default, enums begin numbering their members starting at 0. You can change
this by manually setting the value of one of its members or, even manually set
all the values in the enum.
*/
enum ColorNumber { Red = 1, Green = 3, Blue = 4 };
let cn: Color = Color.Green;

let cnvalue: string = Color[3];

/******************************************
7- Any. We may need to describe the type of variables that we do not know when
we are writing an application. These values may come from dynamic content. In
these cases, we want to opt-out of type-checking and let the values pass through
compile-time checks.
******************************************/
let notSure: any = 4;
notSure = "Maybe a string instead";
notSure = true; // okay, definitely a boolean

/******************************************
8- Void. It is a little like the opposite of any: the absence of having any type
at all. Declaring variables of type void is not useful because you can only
assign undefined or null to them.
******************************************/
function warnUser(): void {
    alert("This is a warning message");
}

/******************************************
9- Type assertions. Sometimes you’ll end up in a situation where you’ll know
more about a value than TypeScript does. A type assertion is like a type cast in
other languages, but performs no special checking or restructuring of data.
******************************************/
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;

let someValueAs: any = "This is a string";
let strLengthAs: number = (someValueAs as string).length;

/******************************************
1- let
******************************************/

/*
Block-scoping - When a variable is declared using let, it uses what some call
lexical-scoping or block-scoping. Block-scoped variables are not visible outside
of their nearest containing block or for-loop.
*/
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    //Error: 'b' doesn't exist here
    return b;
}

// Variables declared in a catch clause also have similar scoping rules.

try {
    throw "Oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);

// Another property of block-scoped variables is that they can’t be read or
// written to before they’re actually declared. All points up until their
// declaration are part of their 'temporal dead zone'

aVariable++; // Illegal to use 'a' before it's declared;
let aVariable;

/*
Re-declarations and Shadowing
*/
let x = 10;
let x = 20; // Error: can't re-declare 'x' in the same scope

// The variables don’t necessarily need to both be block-scoped for TypeScript
// to tell us that there’s a problem.
function f(x) {
    let x = 100; // Error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // Error: can't have both declarations of 'x'
}

function func(condition: boolean, x: number) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}

func(false, 0); // returns '0'
func(true, 0);  // returns '100'

// The act of introducing a new name in a more nested scope is called shadowing.
function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

/*
Block-scoped variable capturing
*/
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }
    // Because we’ve captured city from within its environment, we’re still able
    // to access it despite the fact that the if block finished executing.
    return getCity();
}

/******************************************
2- const
******************************************/

/*
They are like let declarations but, as their name implies, their value cannot be
changed once they are bound. In other words, they have the same scoping rules as
let, but you can’t re-assign to them.
*/

const numLivesForCat = 9;

const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// The values they refer NOT TO are immutable

// All "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

/******************************************
let vs. const -> Applying the principle of least privilege, all declarations
other than those you plan to modify should use const. The rationale is that if a
variable didn’t need to get written to, others working on the same codebase
shouldn’t automatically be able to write to the object, and will need to
consider whether they really need to reassign to the variable. Using const also
makes code more predictable when reasoning about flow of data.
******************************************/

/*
Destructuring
*/

// Array destructuring
let input = [1, 2];
let [first, second] = input; // This creates two new variables named first and second

// swap variables
[first, second] = [second, first];

function dest([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);

/*
...name -> You can create a variable for the remaining items in a list using it.
*/
let [firstElem, ...rest] = [1, 2, 3, 4];
console.log(rest); // outputs [ 2, 3, 4 ]

// Object destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {a, b} = o; // This creates new variables a and b from o.a and o.b.

// Property renaming
let {a: newName1, b: newName2} = o; //let newName1 = o.a;
                                    //let newName2 = o.b;

// Default values
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let {a, b = 1001} = wholeObject;
}

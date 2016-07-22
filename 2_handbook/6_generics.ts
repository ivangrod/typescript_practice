/*
Type variable - A special kind of variable that works on types rather than
values.
*/
function identity<T>(arg: T): T {
    return arg;
}

// This T allows us to capture the type the user provides (e.g. number), so that
// we can use that information later. Here, we use T again as the return type.
// On inspection, we can now see the same type is used for the argument and the
// return type. This allows us to traffic that type information in one side of
// the function and out the other.

// Here we explicitly set T to be string as one of the arguments to the function
// call, denoted using the <> around the arguments rather than ()
let output = identity<string>("myString");

// Here, we use type argument inference, that is, we want the compiler to set
// the value of T for us automatically based on the type of the argument we pass
// in
let outputInference = identity("myString");

/*
Generic Type Variables
*/
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentityWithArray<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

/*
Generic Type
*/
let myIdentity: <U>(arg: U) => U = identity;

let myIdentityCallSignature: { <T>(arg: T): T } = identity;

//Generic interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

//Generic interface with parameter
interface GenericIdentityFnWithParameter<T> {
    (arg: T): T;
}

let myIdentityInterface: GenericIdentityFn = identity;

let myIdentityInterfaceWithParameter: GenericIdentityFnWithParameter<number> = identity;

/*
Generic Classes
*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

/*
Generic Constraints
*/
interface Lengthwise {
    length: number;
}

function loggingIdentityConstraint<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no
    // more error
    return arg;
}

loggingIdentityConstraint(3);
loggingIdentityConstraint({ length: 10, value: 3 });
loggingIdentityConstraint("3");

/*
TypeScript’s structural type system was designed based on how JavaScript code is
typically written. Because JavaScript widely uses anonymous objects like function
expressions and object literals, it’s much more natural to represent the kinds
of relationships found in JavaScript libraries with a structural type system
instead of a nominal one
*/
interface Named {
    name: string;
}

class PersonCompatible {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new PersonCompatible();

/******
The basic rule for TypeScript’s structural type system is that x is compatible
with y if y has at least the same members as x
******/
let xNamed: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
// Note that y has an extra location property, but this does not create an error.
// Only members of the target type (Named in this case) are considered when
// checking for compatibility.
xNamed = y;

/*
Comparing two functions.
To check if x is assignable to y, we first look at the parameter list. Each
parameter in x must have a corresponding parameter in y with a compatible type.
Note that the names of the parameters are not considered, only their types. In
this case, every parameter of x has a corresponding compatible parameter in y,
so the assignment is allowed.
The second assignment is an error, because y has a required second parameter
that ‘x’ does not have, so the assignment is disallowed.
*/
let xTypeCompatible = (a: number) => 0;
let yTypeCompatible = (b: number, s: string) => 0;

yTypeCompatible = xTypeCompatible; // OK
xTypeCompatible = yTypeCompatible; // Error

// Enums. Enums are compatible with numbers, and numbers are compatible with
// enums. Enum values from different enum types are considered incompatible
enum Status { Ready, Waiting };

let statusTypeCompatible = Status.Ready;
statusTypeCompatible = Color.Green;  // Error

// Classes. Classes work similarly to object literal types and interfaces with
// one exception: they have both a static and an instance type. When comparing
// two objects of a class type, only members of the instance are compared.
// Static members and constructors do not affect compatibility
class AnimalTypeCompatible {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let ani: AnimalTypeCompatible;
let s: Size;

ani = s;  // OK
s = ani;  // OK

// Private and protected members in a class affect their compatibility.

// Generics. Because TypeScript is a structural type system, type parameters
// only affect the resulting type when consumed as part of the type of a member
interface Empty<T> { }
let xGeneric: Empty<number>;
let yGeneric: Empty<string>;

xGeneric = yGeneric;  // okay, y matches structure of x

interface NotEmpty<T> {
    data: T;
}
let xGenericNotEmpty: NotEmpty<number>;
let yGenericNotEmpty: NotEmpty<string>;

xGenericNotEmpty = yGenericNotEmpty;  // Error, x and y are not compatible

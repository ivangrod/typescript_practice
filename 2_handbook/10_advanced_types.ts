/*
1- Union Type.

A union type describes a value that can be one of several types. We use the
vertical bar (|) to separate each type, so number | string | boolean is the type
of a value that can be a number, a string, or a boolean.
*/
function padLeft(value: string, padding: string | number) {
    // ...
}
let indentedString = padLeft("Hello world", true); // Errors during compilation

// If we have a value that has a union type, we can only access members that are
// common to all types in the union.
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors

/*
2- Type Guard.

A type guard is some expression that performs a runtime check that guarantees
the type in some scope. To define a type guard, we simply need to define a
function whose return type is a type predicate.
*/
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

/*
3- Intersection Types.

Intersection types are closely related to union types, but they are used very
differently. An object of this type will have all members of all three types. In
practice you will mostly see intersection types used for mixins
*/
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class PersonIntersection {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new PersonIntersection("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

/*
Polymorphic 'this' types.

A polymorphic this type represents a type that is the subtype of the containing
class or interface. This is called F-bounded polymorphism. This makes hierarchical
fluent interfaces much easier to expres.
*/
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let basicCalc = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let scientisCalc = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

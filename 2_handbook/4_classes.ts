/*
Starting with ECMAScript 2015, also known as ECMAScript 6, JavaScript
programmers will be able to build their applications using the object-oriented
class-based approach.
*/

/*
1- Classes
*/
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}

let greeter = new Greeter("World!");

/*
2- Inheritance
*/
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        // Derived classes that contain constructor functions MUST call super()
        // which will execute the constructor function on the base class.
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        // Derived classes that contain constructor functions MUST call super()
        // which will execute the constructor function on the base class.
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
// Even though tom is declared as an Animal, since its value is a Horse, when
// tom.move(34) calls the overriding method in Horse
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/*
3- Public, private, and protected modifiers.
*/

// In TypeScript, each member is public by default.
class AnimalPublic {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// When a member is marked private, it cannot be accessed from outside of its
// containing class.
class AnimalPrivate {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new AnimalPrivate("Cat").name; // Error: 'name' is private;

/*
TypeScript is a structural type system. When we compare two different types,
regardless of where they came from, if the types of all members are compatible,
then we say the types themselves are compatible.

However, when comparing types that have private and protected members, we treat
these types differently. For two types to be considered compatible, if one of
them has a private member, then the other must have a private member that
originated in the same declaration. The same applies to protected members.
*/
class AnimalToCompare {
    // Because Animal and Rhino share the private side of their shape from the
    // same declaration of private name: string in Animal, they are compatible.
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends AnimalToCompare {
    constructor() { super("Rhino"); }
}

class Employee {
    // Even though Employee also has a private member called name, it’s not the
    // one we declared in Animal
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new AnimalToCompare("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible

// The protected modifier acts much like the private modifier with the exception
// that members declared protected can also be accessed by instances of deriving
// classes
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class EmployeeProtected extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        // Notice that while we can’t use name from outside of Person, we can
        // still use it from within an instance method of Employee because
        // Employee derives from Person
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // Error

// Parameter properties
class AnimalWithParameterProperties {
    // Parameter properties are declared by prefixing a constructor parameter with
    // an accessibility modifier. Using private for a parameter property declares
    // and initializes a private member; likewise, the same is done for public and
    // protected.
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/*
4- Accessors
*/
let passcode = "secret passcode";

class EmployeeWithPasscode {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employeeWithPasscode = new EmployeeWithPasscode();
employeeWithPasscode.fullName = "Bob Smith";
if (employeeWithPasscode.fullName) {
    console.log(employeeWithPasscode.fullName);
}

/*
5- Static Properties. They are visible on the class itself rather than on the
instances.
*/
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/*
6- Abstract Classes.
*/
abstract class AnimalAbstract {
    abstract makeSound(): void;
    move(): void {
        console.log("Roaming the Earth...");
    }
}

abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes
                                          // must call super()
    }
    printMeeting(): void {
        // Methods within an abstract class that are marked as abstract do not
        // contain an implementation and must be implemented in derived classes.
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // Ok to create a reference to an abstract type
department = new Department(); // Error: cannot create an instance of an
                               // abstract class
department = new AccountingDepartment(); // Ok to create and assign a
                                         //non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // Error: method doesn't exist on declared
                              // abstract type

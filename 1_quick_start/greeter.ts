/*
Here we use an interface that describes objects that have a firstName and
lastName field. In TypeScript, two types are compatible if their internal
structure is compatible. This allows us to implement an interface just by having
the shape the interface requires, without an explicit implements clause
*/

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    /*The use of public on arguments to the constructor is a shorthand that allows
    us to automatically create properties with that name*/
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var IUser = { firstName: "Jane", lastName: "User" };

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

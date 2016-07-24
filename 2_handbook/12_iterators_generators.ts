/*
1- Iterables.
An object is deemed iterable if it has an implementation for the Symbol.iterator
property.
*/

// for..of statements
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

// for..of vs. for..in statements
let listIterable = [4, 5, 6];

for (let i in listIterable) {
   console.log(i); // "0", "1", "2",
}

for (let i of listIterable) {
   console.log(i); // "4", "5", "6"
}

// for..in operates on any object; it serves as a way to inspect properties on
// this object. for..of on the other hand, is mainly interested in values of
// iterable objects.

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

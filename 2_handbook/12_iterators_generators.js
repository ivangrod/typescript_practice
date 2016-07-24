let someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry);
}
let listIterable = [4, 5, 6];
for (let i in listIterable) {
    console.log(i);
}
for (let i of listIterable) {
    console.log(i);
}
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (let pet in pets) {
    console.log(pet);
}
for (let pet of pets) {
    console.log(pet);
}

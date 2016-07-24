let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");
let sym4 = Symbol("key");
sym3 === sym4;
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]);
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return "C";
    }
}
let cToSymbol = new C();
let className = cToSymbol[getClassNameSymbol]();

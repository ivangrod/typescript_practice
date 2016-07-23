/*
Basics
*/
let xInference = 3;

// The type of the x variable is inferred to be number. This kind of inference
// takes place when initializing variables and members, setting parameter
// default values, and determining function return types.

/*
Best common type
*/

// We must consider the type of each array element. Here we are given two
// choices for the type of the array: number and null. The best common type
// algorithm considers each candidate type, and picks the type that is compatible
// with all the other candidates.
let xBestInference = [0, 1, null];

// There are some cases where types share a common structure, but no one type is
// the super type of all candidate types. To correct this, instead explicitly
// provide the type when no one type is a super type of all other candidates.
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];

/*
Contextual Type. It occurs when the type of an expression is implied by its
location
*/
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.buton);  //<- Error
};

// If the contextually typed expression contains explicit type information, the
// contextual type is ignored.
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.buton);  //<- Now, no error is given
};

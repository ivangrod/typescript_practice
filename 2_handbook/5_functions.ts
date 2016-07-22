/*
TypeScript functions can be created both as a named function or as an anonymous
function. This allows you to choose the most appropriate approach for your
application, whether you’re building a list of functions in an API or a one-off
function to hand off to another function.
*/

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };

/*
Typing the function
*/
function addTyping(x: number, y: number): number {
    return x + y;
}

let myAddTyping = function(x: number, y: number): number { return x + y; };

// The second part is the return type. We make it clear which is the return type
// by using a fat arrow (=>) between the parameters and the return type. As
// mentioned before, this is a required part of the function type, so if the
// function doesn’t return a value, you would use void instead of leaving it off.
let myAddWriteType: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

// “Contextual Typing” -> The parameters 'x' and 'y' have the type number
let myAddContextualTyping: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

/*
Optional and Default Parameters
*/
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // Error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // Error, too many parameters
let result3 = buildName("Bob", "Adams");         // Ah, just right

// In JavaScript, every parameter is optional, and users may leave them off as
// they see fit. When they do, their value is undefined. We can get this
// functionality in TypeScript by adding a ? to the end of parameters we want to
// be optional.
function buildNameOptional(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1Optional = buildNameOptional("Bob");          // Works correctly now
let result2Optional = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3Optional = buildNameOptional("Bob", "Adams"); // Ah, just right

// In TypeScript, we can also set a value that a parameter will be assigned if
// the user does not provide one, or if the user passes undefined in its place.
// These are called default-initialized parameters.
function buildNameDefault(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1Default = buildNameDefault("Bob");// Works correctly now, returns "Bob Smith"
let result2Default = buildNameDefault("Bob", undefined);// Still works, also returns "Bob Smith"
let result3Default = buildNameDefault("Bob", "Adams", "Sr.");// Error, too many parameters
let result4Default = buildNameDefault("Bob", "Adams");// Ah, just right

// Unlike plain optional parameters, default-initialized parameters don’t need
// to occur after required parameters. If a default-initialized parameter comes
// before a required parameter, users need to explicitly pass undefined to get
// the default initialized value.
function buildNameOptionalBeforeRequired(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob");// Error, too few parameters
let result2OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob", "Adams", "Sr.");// Error, too many parameters
let result3OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob", "Adams");// Okay and returns "Bob Adams"
let result4OptionalBeforeRequired = buildNameOptionalBeforeRequired(undefined, "Adams");// Okay and returns "Will Adams"

/*
Rest Parameters. They are treated as a boundless number of optional parameters.
*/
function buildNameRestParameters(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameRestParameters("Joseph", "Samuel", "Lucas", "MacKinzie");

/*
Lambdas and using this
*/

// To capture the this available when the function is created rather than when
// it is invoked, we can use the arrow syntax (() => {}) rather than the
// JavaScript function expression.

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

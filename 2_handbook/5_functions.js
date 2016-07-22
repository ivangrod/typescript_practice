function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
function addTyping(x, y) {
    return x + y;
}
var myAddTyping = function (x, y) { return x + y; };
var myAddWriteType = function (x, y) { return x + y; };
var myAddContextualTyping = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
var result2 = buildName("Bob", "Adams", "Sr.");
var result3 = buildName("Bob", "Adams");
function buildNameOptional(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1Optional = buildNameOptional("Bob");
var result2Optional = buildName("Bob", "Adams", "Sr.");
var result3Optional = buildNameOptional("Bob", "Adams");
function buildNameDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1Default = buildNameDefault("Bob");
var result2Default = buildNameDefault("Bob", undefined);
var result3Default = buildNameDefault("Bob", "Adams", "Sr.");
var result4Default = buildNameDefault("Bob", "Adams");
function buildNameOptionalBeforeRequired(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result1OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob");
var result2OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob", "Adams", "Sr.");
var result3OptionalBeforeRequired = buildNameOptionalBeforeRequired("Bob", "Adams");
var result4OptionalBeforeRequired = buildNameOptionalBeforeRequired(undefined, "Adams");
function buildNameRestParameters(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNameRestParameters("Joseph", "Samuel", "Lucas", "MacKinzie");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);

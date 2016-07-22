function identity(arg) {
    return arg;
}
var output = identity("myString");
var outputInference = identity("myString");
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentityWithArray(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = identity;
var myIdentityCallSignature = identity;
var myIdentityInterface = identity;
var myIdentityInterfaceWithParameter = identity;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentityConstraint(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentityConstraint(3);
loggingIdentityConstraint({ length: 10, value: 3 });
loggingIdentityConstraint("3");

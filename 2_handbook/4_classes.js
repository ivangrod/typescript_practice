var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World!");
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var AnimalPublic = (function () {
    function AnimalPublic(theName) {
        this.name = theName;
    }
    AnimalPublic.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalPublic;
}());
var AnimalPrivate = (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
new AnimalPrivate("Cat").name;
var AnimalToCompare = (function () {
    function AnimalToCompare(theName) {
        this.name = theName;
    }
    return AnimalToCompare;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
    }
    return Rhino;
}(AnimalToCompare));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new AnimalToCompare("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
animal = employee;
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var EmployeeProtected = (function (_super) {
    __extends(EmployeeProtected, _super);
    function EmployeeProtected(name, department) {
        _super.call(this, name);
        this.department = department;
    }
    EmployeeProtected.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeProtected;
}(Person));
var howard = new EmployeeProtected("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
var AnimalWithParameterProperties = (function () {
    function AnimalWithParameterProperties(name) {
        this.name = name;
    }
    AnimalWithParameterProperties.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalWithParameterProperties;
}());
var passcode = "secret passcode";
var EmployeeWithPasscode = (function () {
    function EmployeeWithPasscode() {
    }
    Object.defineProperty(EmployeeWithPasscode.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeWithPasscode;
}());
var employeeWithPasscode = new EmployeeWithPasscode();
employeeWithPasscode.fullName = "Bob Smith";
if (employeeWithPasscode.fullName) {
    console.log(employeeWithPasscode.fullName);
}
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
var AnimalAbstract = (function () {
    function AnimalAbstract() {
    }
    AnimalAbstract.prototype.move = function () {
        console.log("Roaming the Earth...");
    };
    return AnimalAbstract;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        _super.call(this, "Accounting and Auditing");
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department;
department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

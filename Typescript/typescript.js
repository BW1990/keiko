// boolean;
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
// template strings
var favouriteQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple (array with diff types)
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
// Any - !!!!! BE CAREFUL
var whatever = 'aghhhhhh nooooo';
// void
var sing = function () {
    console.log('lalalalaa');
};
// never; makes sure it never returns
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
;
var dog = {};
dog.count;
// Function
var fightArmyRobot2 = function (robots) {
    console.log('Fight!');
};
var fightArmyRobot3 = function (robots) {
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'allalalalal';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello, " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAWWWWR');
// Union
var confused = 'Hello';
confused = 23;

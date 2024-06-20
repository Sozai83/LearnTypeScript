"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hi = 'hello';
console.log(hi);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
//any
let anything = true;
anything = 'Hello';
anything = 2;
anything = {};
anything.test = 'test';
let banana = 'banana';
//no error
banana = anything;
//Union
let unionType = 10;
// errors - unionType.indexOf('h');
unionType = 'Hello';
unionType.indexOf('h');
// errors - unionType = true;
let unionTypes = ['hello', 22];
//Literal
const apple = 'apple';
const apple2 = 'apple';
let clothSize = 'large';
let clothSize2 = 'medium';
//functions
function add2(num1, num2) {
    return num1 + num2;
}
//you need to have types for the parameters as it beocmes any if you don't clarify the type
function add3(num1, num2) {
    return num1 + num2;
}
//void
//function that does not return anything
function sayHello() {
    console.log('Hello');
}
//undefined and null
function sayHello2() {
    return;
}
let tmpNull = null;
//errors - tmpNull = 1
const anotherAdd = add;
const doubleNumber = num => num * 2;
//callback
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(3, callBackNum => callBackNum);
//unknown
let unknownInput = 'hello';
unknownInput = 2;
let anyInput = 2;
let text;
//errors - text = unknownInput;
//does not error - text = anyInput;
//does not error
if (typeof unknownInput == 'string') {
    text = unknownInput;
}
//never
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
//void
function error2(message) {
    throw new Error(message);
}
//never
const error3 = (message) => { throw new Error(message); };

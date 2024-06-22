"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hi = 'hello';
console.log(hi);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
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
let anything = true;
anything = 'Hello';
anything = 2;
anything = {};
anything.test = 'test';
let banana = 'banana';
banana = anything;
let unionType = 10;
unionType = 'Hello';
unionType.indexOf('h');
let unionTypes = ['hello', 22];
const apple = 'apple';
const apple2 = 'apple';
let clothSize = 'large';
let clothSize2 = 'medium';
function add2(num1, num2) {
    return num1 + num2;
}
function add3(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
function sayHello2() {
    return;
}
let tmpNull = null;
const anotherAdd = add;
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(3, callBackNum => callBackNum);
let unknownInput = 'hello';
unknownInput = 2;
let anyInput = 2;
let text;
if (typeof unknownInput == 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
function error2(message) {
    throw new Error(message);
}
const error3 = (message) => { throw new Error(message); };

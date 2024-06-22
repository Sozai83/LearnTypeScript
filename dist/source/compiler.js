"use strict";
let hello = "hello";
//hi
console.log(hello.toUpperCase());
function hi(message) {
    console.log(message);
}
//noUnusedParameters
function echo(message, name) {
    return message;
}
//noImplicitReturns
function echo2(message) {
    if (message) {
        return message;
    }
}
let implicitAny;
//implicityAny : any
implicitAny = "string";
//implicityAny : string
implicitAny.toUpperCase();
let nullableMessage = null;
let undefinedMessage = undefined;
let onlyNull = undefined;
let onlyUndefined = null;
// call binds a parameter for "this"
echo.call(null, "hi", "Shiori");
//noUnusedLocals
function unusedLocals(message) {
    //'oi' is declared but its value is never read.
    const oi = "Oi";
    return message;
}
//no error
let globalHello = "hello";

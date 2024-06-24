"use strict";
function toLowerCase(x) {
    if (typeof x === 'string') {
        return x.toLowerCase();
    }
    return x;
}
const lowerHello = toLowerCase;
// errors - const lowerHello2: tempFunc = function (x: string) { return 'hello' }
//number 
const lowerNumber = toLowerCase(2);
/*
overload all of the function types
(a: number, b: string): number;
(a: string, b: number): number;
(a: string): number;
 */
let intersectionFunc;
intersectionFunc = function (a, b) { return 0; };
/*
(a: number): number;
OR
(a: string): string;
 */
let unionFunc;
//let unionFunc: (a: never) => string | number
//errors - unionFunc('test');
//this is fine
unionFunc = (a) => a;

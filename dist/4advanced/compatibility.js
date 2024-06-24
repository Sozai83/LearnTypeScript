"use strict";
let target = 'hello';
let source = 'hello';
//Type 'string' is not assignable to type '"hello"'
//errors target = source;
//enum and number are compatible
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
//COLOR
let target2 = Color.RED;
//number
let source2 = 100;
//COLOR - no error
target2 = source2;
var Color2;
(function (Color2) {
    Color2["RED"] = "RED";
    Color2["BLUE"] = "BLUE";
})(Color2 || (Color2 = {}));
//COLOR
let target3 = Color.RED;
//number
let source3 = 100;
//COLOR - no error
target3 = source3;
//Function
let target4 = function (a, b) { };
let source4 = function (a) { };
//no error
target4 = source4;
//simply the fuction will ignore the second parameter
target4('hello', 'hi');
let target5 = function (a) { };
let source5 = function (a, b) { };
//errors - target5 = source5
//targe5('hello'); as it needs one more paramater
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        //errors - private age: number = 35;
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 5;
    }
}
let target6 = new AdvancedPerson();
let source6 = new AdvancedCar();
target6 = source6;
//https://www.typescriptlang.org/docs/handbook/type-compatibility.html#private-and-protected-members-in-classes
//https://github.com/microsoft/TypeScript/blob/c57fea2a0d736b5051ec72bdeb70ace6ac02ca2e/doc/spec-ARCHIVED.md
//4.19.2 + operator
let plusAny = 'hello';
let plusNumber = 1;
let plus = plusAny + plusNumber;

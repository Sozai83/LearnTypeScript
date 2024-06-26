let target: 'hello' = 'hello';
let source: string = 'hello';

//Type 'string' is not assignable to type '"hello"'
//errors target = source;


//enum and number are compatible
enum Color {
    RED,
    BLUE
}

//COLOR
let target2 = Color.RED;

//number
let source2 = 100

//COLOR - no error
target2 = source2

enum Color2 {
    RED = 'RED',
    BLUE = 'BLUE'
}

//COLOR
let target3 = Color.RED;

//number
let source3 = 100

//COLOR - no error
target3 = source3



//Function
let target4 = function (a: string, b: string) { }
let source4 = function (a: string) { }

//no error
target4 = source4

//simply the fuction will ignore the second parameter
target4('hello', 'hi');


let target5 = function (a: string) { }
let source5 = function (a: string, b: string) { }

//errors - target5 = source5
//targe5('hello'); as it needs one more paramater


class AdvancedPerson {
    name: string = 'Peter';
    //errors - private age: number = 35;
    age: number = 35;
}

class AdvancedCar {
    name: string = 'Prius';
    age: number = 5;
}

let target6 = new AdvancedPerson();
let source6 = new AdvancedCar();

target6 = source6;

//https://www.typescriptlang.org/docs/handbook/type-compatibility.html#private-and-protected-members-in-classes
//https://github.com/microsoft/TypeScript/blob/c57fea2a0d736b5051ec72bdeb70ace6ac02ca2e/doc/spec-ARCHIVED.md

//4.19.2 + operator
let plusAny: any = 'hello';
let plusNumber: number = 1;
let plus = plusAny + plusNumber;
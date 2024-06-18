import axios from 'axios';

let hi: string = 'hello';
console.log(hi);

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 2));

//Enum

enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}


const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

//any
let anything: any = true;
anything = 'Hello';
anything = 2;
anything = {};
anything.test = 'test';

let banana = 'banana';
//no error
banana = anything;


//Union
let unionType: number | string = 10;
// errors - unionType.indexOf('h');

unionType = 'Hello';
unionType.indexOf('h');
// errors - unionType = true;

let unionTypes: (number | string)[] = ['hello', 22];



//Literal
const apple: 'apple' = 'apple';
const apple2 = 'apple';

let clothSize: 'small' | 'medium' | 'large' = 'large';


//Type arias
type ClothSize = 'small' | 'medium' | 'large';
let clothSize2: ClothSize = 'medium';


//functions

function add2(num1: number, num2: number): number {
    return num1 + num2
}

//you need to have types for the parameters as it beocmes any if you don't clarify the type
function add3(num1: number, num2: number) {
    return num1 + num2;
}


//void

//function that does not return anything
function sayHello() {
    console.log('Hello');
}


//undefined and null
function sayHello2(): undefined {
    return
}

let tmpNull: null = null;
//errors - tmpNull = 1


const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = num => num * 2;


//callback
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(3, callBackNum => callBackNum);


//unknown
let unknownInput: unknown = 'hello';
unknownInput = 2;
let anyInput: any = 2;

let text: string;
//errors - text = unknownInput;
//does not error - text = anyInput;

//does not error
if (typeof unknownInput == 'string') {
    text = unknownInput;
}



//never
function error(message: string): never {
    throw new Error(message);
}

console.log(error('This is an error'));

//void
function error2(message: string) {
    throw new Error(message);
}

//never
const error3 = (message: string) => { throw new Error(message) };
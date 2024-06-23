//type of
function toLowerCase(x: string): string;
function toLowerCase(x: number): number;
function toLowerCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toLowerCase();
    }

    return x;
}

/*const lowerHello: {
    (x: string): string; -method (similar to interface)
    (x: number): number; -method (similar to interface)
}*/

interface tempFunc {
    (x: string): string;
    (x: number): number;
}

const lowerHello: tempFunc = toLowerCase;
// errors - const lowerHello2: tempFunc = function (x: string) { return 'hello' }


//number 
const lowerNumber = toLowerCase(2);


//
interface FuncA {
    (a: number, b: string): number;
    (a: string, b: number): number;
}

interface FuncB {
    (a: string): number;
}


/*
overload all of the function types
(a: number, b: string): number;
(a: string, b: number): number;
(a: string): number;
 */
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: string | number) { return 0 };


interface FuncC {
    (a: number): number;
}

interface FuncD {
    (a: string): string;
}


/*

 */

let unionFunc: FuncC | FuncD;
//let unionFunc: (a: never) => string | number
//errors - unionFunc('test');

//this is fine
unionFunc = (a: string) => a;
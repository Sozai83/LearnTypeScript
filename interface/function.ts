type addFunc = (num1: number, num2: number) => number;
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => n1 + n2;

interface addFunc2 {
    (num1: number, num2: number): number
}

let addFunc2: addFunc2 = (n1: number, n2: number) => n1 + n2;
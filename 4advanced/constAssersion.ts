const milk = 'milk';
//drink: string
let drink = milk;

const milk2 = 'milk' as const;
//drink2: 'milk'
let drink2 = milk2;


//array
//array: number[]
const array = [10, 20];

//array2: readonly [10, 20] - cannot push etc
const array2 = [10, 20] as const;

//object
/*
const peter: {
    readonly name: "Peter";
    readonly age: 38;
}
*/
//you can use this for enum
const peter = {
    name: 'Peter',
    age: 38
} as const;



//Typeof


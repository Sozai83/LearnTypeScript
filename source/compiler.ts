let hello = "hello";
//hi
console.log(hello.toUpperCase());

function hi(message: string) {
    console.log(message);
}

let implicitAny;
//implicityAny : any
implicitAny = "string";
//implicityAny : string
implicitAny.toUpperCase();

let nullableMessage: string | null = null;
let undefinedMessage: string | undefined = undefined;
let onlyNull: null | undefined = undefined
let onlyUndefined: undefined | null = null;
let hello = "hello";
//hi
console.log(hello.toUpperCase());

function hi(message: string) {
    console.log(message);
}

//noUnusedParameters
function echo(message: string, name: string): string | null {
    return message;
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

// call binds a parameter for "this"
echo.call(null, "hi", "Shiori");

//noUnusedLocals

function unusedLocals(message: string) {
    //'oi' is declared but its value is never read.
    const oi = "Oi";
    return message;
}

//no error
let globalHello = "hello";
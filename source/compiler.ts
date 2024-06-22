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
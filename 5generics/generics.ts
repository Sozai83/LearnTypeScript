

function copy(value: any) {
    return value;
}

//You need to asserion to set the type
console.log((copy('hello') as string).toUpperCase);

//Generics
// copy2<T>(value: T): T
function copy2<T>(value: T): T {
    return value;
}

//you can pass type as parameter
//string
console.log(copy2<string>('hello'));

/*
function copy2<{
    name: string;
}>(value: {
    name: string;
}): {
    name: string;
}
*/
console.log(copy2({ name: 'Quill' }));


//extends
/* (type parameter) T in copy3<T extends {
    name: string;
}>(value: T): T
*/
function copy3<T extends { name: string }>(value: T): T {
    return value;
}

//Argument of type 'string' is not assignable to parameter of type '{ name: string; }'.
//errors - console.log(copy3('hello'));

console.log(copy3({ name: 'Quill' }));
console.log(copy3({ name: 'Quill', age: 3 }));
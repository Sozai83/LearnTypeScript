"use strict";
function copy(value) {
    return value;
}
//You need to asserion to set the type
console.log(copy('hello').toUpperCase);
//Generics
// copy2<T>(value: T): T
function copy2(value) {
    return value;
}
//you can pass type as parameter
//string
console.log(copy2('hello'));
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
function copy3(value) {
    return value;
}
//Argument of type 'string' is not assignable to parameter of type '{ name: string; }'.
//errors - console.log(copy3('hello'));
console.log(copy3({ name: 'Quill' }));
console.log(copy3({ name: 'Quill', age: 3 }));

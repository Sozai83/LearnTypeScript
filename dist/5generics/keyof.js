"use strict";
//keyof
//T = generics
//U = keyof T: name | age
function copy4(value, key) {
    return value[key];
}
console.log(copy4({ name: "Test", age: 9 }, 'age'));

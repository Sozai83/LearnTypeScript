//keyof

//type K = "name" | "age"
type K = keyof {
    name: string;
    age: number;
}

//T = generics
//U = keyof T: name | age
function copy4<T extends { name: string }, U extends keyof T>(value: T, key: U): T[U] {

    return value[key];
}

console.log(copy4(
    { name: "Test", age: 9 },
    'age'
));


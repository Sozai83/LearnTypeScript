/*
type PeterType = {
    readonly name: "Peter";
    readonly age: 38;
}
*/

type PeterType = typeof peter2;

const peter2 = {
    name: 'Peter',
    age: 38
} as const; 
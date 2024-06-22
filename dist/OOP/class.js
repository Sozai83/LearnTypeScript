"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age++;
    }
    //method
    greeting() {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }
}
const shiori = new Person("Shiori", 32);
//Hello. My name is Shiori. I am 32 years old
shiori.greeting();
shiori.incrementAge();
//Hello. My name is Shiori. I am 33 years old.
shiori.greeting();
const anotherShiori = {
    anotherGreeting: shiori.greeting
};
//Hello. My name is undefined
//return an error - anotherShiori.anotherGreeting();
// const anotherShiori2 = {
//     name: 'Shiori',
//     age: 36,
//     greeting: shiori.greeting
// }
// //Hello. My name is Shiori
// anotherShiori2.greeting();

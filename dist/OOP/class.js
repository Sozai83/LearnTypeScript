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
//This will error as age field is priavate
//errors - console.log(shiori.age);
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
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }
}
const karl = new Person2("Karl", 32);
//Hello. My name is Karl. I am 32 years old.
karl.greeting();

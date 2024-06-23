"use strict";
class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Create one Person5 instance only once
    static getInstance() {
        if (Person5.instance)
            return Person5.instance;
        Person5.instance = new Person5("Shiori", 32);
        return Person5.instance;
    }
    greeting() {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }
}
const shiori2 = Person5.getInstance();
//Hello. My name is Shiori. I am 32 years old.
shiori2.greeting();

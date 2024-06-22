"use strict";
class Person4 {
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
        this.explainJob();
    }
}
class Teacher3 extends Person4 {
    explainJob() {
        console.log(`I teach ${this._subject}`);
    }
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
}
//Errors - Cannot create an instance of an abstract class.ts(2511)
//const person5 = new Person4("Test", 44);
const teacher4 = new Teacher3("Teacher", 38, "Science");
//Hello. My name is Teacher. I am 38 years old.
//I teach Science
teacher4.greeting();

"use strict";
class Person3 {
    static isAdult(age) {
        if (age > 17)
            return true;
        return;
    }
}
Person3.species = "Homo sapients";
//Homo sapients
console.log(Person3.species);
//true
console.log(Person3.isAdult(38));
class Teacher2 extends Person3 {
    constructor() {
        super();
    }
}
//Homo sapients
console.log(Teacher2.species);
//true
console.log(Teacher2.isAdult(38));

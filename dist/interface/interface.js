"use strict";
const human = {
    name: "Shiori",
    age: 33,
};
let developer;
const human2 = {
    name: "Shiori",
    age: 33,
    greeting(message) {
        console.log(message);
    }
};
class Developer {
    constructor(name, age, experience, position) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.position = position;
    }
    greeting(message) { console.log(message); }
}
const user = new Developer("Shiori", 33, 3, "Junior software enginner");
user.greeting('Hello');
const tempUser = {
    name: "Karl",
    age: 32,
    experience: 2,
    greeting(message) {
        console.log(message);
    }
};
const user2 = tempUser;

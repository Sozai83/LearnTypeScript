"use strict";
const namable = {
    name: "Shiori"
};
const namable2 = {
    name: "Shiori",
    nickName: "Shichan"
};
class Developer2 {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    greeting(message = 'hello') {
        if (message) {
            console.log(message);
        }
    }
}
const meecoDev = new Developer2(32);
meecoDev.greeting();
//undefined
console.log(meecoDev.name);
const meecoDev2 = new Developer2(32, "Shiori");
//Shiori
console.log(meecoDev2.name);

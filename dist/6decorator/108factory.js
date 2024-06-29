"use strict";
//decorator factory
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logging2(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    //You cannot use Function for constructor
    //To be able to 
    return function (constructor) {
        const mountedElement = document.querySelector(selector);
        //set contructor
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
let User2 = class User2 {
    constructor() {
        this.name = 'Quill';
        console.log('User was created!');
    }
};
User2 = __decorate([
    Component('<h1>{{name}{</h1>', '#app')
    //decoration
    ,
    Logging2('Logging User')
], User2);
const decUser3 = new User2();
const decUser4 = new User2();
/**
 *
Logging User
[class User2]
User was created!
User was created!
 *
 */ 

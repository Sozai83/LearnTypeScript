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
//decoration
let User2 = class User2 {
    constructor() {
        this.name = 'Quill';
        console.log('User was created!');
    }
};
User2 = __decorate([
    Logging2('Loggin User')
], User2);
const decUser3 = new User2();
const decUser4 = new User2();
/**
 *
Logging....
[class User]
User was created!
User was created!
 *
 */ 

"use strict";
;
const quill = {
    name: 'Quill',
    role: 'Front end',
    follower: 100
};
//type of
function toUppperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
//in
function describeProfile(nomadWorker) {
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
//instance of
class Dog {
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
//only hello will appear
havePet({ speak() { console.log('hello'); }, fly() { console.log('Cannot fly'); } });

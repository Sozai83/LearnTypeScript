type Namable = {
    name: string;
    nickName?: string;
}

const namable: Namable = {
    name: "Shiori"
}

const namable2: Namable = {
    name: "Shiori",
    nickName: "Shichan"
}

interface Human3 {
    name?: string;
    readonly age: number;
    //add method
    //greeting: (msg: string) => void;
    greeting?(msg: string): void;
} //errors - | string;


class Developer2 implements Human3 {
    constructor(public age: number, public name?: string) { }
    greeting(message: string = 'hello') {
        if (message) {
            console.log(message);
        }
    }
}

const meecoDev = new Developer2(32);
meecoDev.greeting()
//undefined
console.log(meecoDev.name);

const meecoDev2 = new Developer2(32, "Shiori");
//Shiori
console.log(meecoDev2.name);
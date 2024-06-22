class Person {
    //property
    name: string;
    age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    //method
    greeting(this: Person) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }

}

const shiori = new Person("Shiori", 32);
shiori.greeting();
console.log('Shiori');

const anotherShiori = {
    anotherGreeting: shiori.greeting
}

//Hello. My name is undefined
//return an error - anotherShiori.anotherGreeting();

const anotherShiori2 = {
    name: 'Shiori',
    age: 36,
    greeting: shiori.greeting
}

//Hello. My name is Shiori
anotherShiori2.greeting();
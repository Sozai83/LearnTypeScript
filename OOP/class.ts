class Person {
    //property
    name: string;

    constructor(initName: string) {
        this.name = initName;
    }

    //method
    greeting(this: { name: string }) {
        console.log(`Hello. My name is ${this.name}`);
    }

}

const shiori = new Person("Shiori");
shiori.greeting();
console.log('Shiori');

const anotherShiori = {
    anotherGreeting: shiori.greeting
}

//Hello. My name is undefined
//return an error - anotherShiori.anotherGreeting();

const anotherShiori2 = {
    name: 'Shiori',
    anotherGreeting: shiori.greeting
}

//Hello. My name is Shiori
anotherShiori2.anotherGreeting();
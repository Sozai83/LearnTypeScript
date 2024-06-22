class Person {
    //property
    name: string;

    constructor(initName: string) {
        this.name = initName;
    }

    //method
    greeting() {
        console.log(`Hello. My name is ${this.name}`);
    }

}

const Shiori = new Person("Shiori");
Shiori.greeting();
console.log('Shiori');
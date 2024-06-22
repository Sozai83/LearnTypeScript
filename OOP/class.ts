class Person {
    //property
    name: string;
    private age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    incrementAge() {
        this.age++;
    }

    //method
    greeting(this: Person) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }

}

const shiori = new Person("Shiori", 32);
//Hello. My name is Shiori. I am 32 years old
shiori.greeting();

shiori.incrementAge();
//Hello. My name is Shiori. I am 33 years old.
shiori.greeting();

//This will error as age field is priavate
//errors - console.log(shiori.age);

const anotherShiori = {
    anotherGreeting: shiori.greeting
}

//Hello. My name is undefined
//return an error - anotherShiori.anotherGreeting();

// const anotherShiori2 = {
//     name: 'Shiori',
//     age: 36,
//     greeting: shiori.greeting
// }

// //Hello. My name is Shiori
// anotherShiori2.greeting();


//Readonly
class Person2 {
    constructor(readonly name: string, private age: number) { }

    greeting(this: Person2) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
    }

    incrementAge(this: Person2) {
        //errors when it's readonly
        this.age++;
    }
}

const karl = new Person2("Karl", 32);

//Hello. My name is Karl. I am 32 years old.
karl.greeting();

console.log(karl.name);
//errors as it's read only
//karl.name = "Shiori";

//teacher is also person
class Teacher extends Person2 {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    greeting(this: Teacher) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
}

const teacher = new Teacher("Ichi", 28, "Math");
//Hello. My name is Ichi. I am 28 years old.
teacher.greeting();
//Math
console.log(teacher.subject);
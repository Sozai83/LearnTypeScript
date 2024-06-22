abstract class Person4 {
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
    greeting(this: Person4) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }

    abstract explainJob(): void;

}

class Teacher3 extends Person4 {
    explainJob() {
        console.log(`I teach ${this._subject}`);
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
}

//Errors - Cannot create an instance of an abstract class.ts(2511)
//const person5 = new Person4("Test", 44);


const teacher4 = new Teacher3("Teacher", 38, "Science");
//Hello. My name is Teacher. I am 38 years old.
//I teach Science
teacher4.greeting();
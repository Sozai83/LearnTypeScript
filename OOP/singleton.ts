class Person5 {
    private static instance: Person5;

    private constructor(public name: string, private age: number) { }

    //Create one Person5 instance only once
    static getInstance() {
        if (Person5.instance) return Person5.instance;
        Person5.instance = new Person5("Shiori", 32);
        return Person5.instance;
    }

    greeting(this: Person5) {
        console.log(`Hello. My name is ${this.name}. I am ${this.age} years old.`)
    }
}


const shiori2 = Person5.getInstance();
//Hello. My name is Shiori. I am 32 years old.
shiori2.greeting();


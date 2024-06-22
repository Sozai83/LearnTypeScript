type Human = {
    name: string;
    readonly age: number;
} | string;


const human: Human = {
    name: "Shiori",
    age: 33,
}

// Errors - human.age = 22;

let developer: Human;

//interface is only for object. Type arias can be used for any types.
// readonly will not work with the Developer class where it's "implemented". It will refer to the setting within the class instead.
interface Human2 {
    name: string;
    readonly age: number;
    //add method
    //greeting: (msg: string) => void;
    greeting(msg: string): void;
} //errors - | string;




const human2: Human2 = {
    name: "Shiori",
    age: 33,
    greeting(message: string) {
        console.log(message);
    }
}

interface DeveloperInterface {
    position: string;
}

class Developer implements Human2, DeveloperInterface {
    constructor(
        public name: string,
        public age: number,
        public experience: number,
        public position: string
    ) { }
    greeting(message: string) { console.log(message); }
}

const user = new Developer("Shiori", 33, 3, "Junior software enginner");
user.greeting('Hello');

const tempUser = {
    name: "Karl",
    age: 32,
    experience: 2,
    greeting(message: string) {
        console.log(message);
    }
}
const user2: Human2 = tempUser;

// Errors - user2.age = 22;

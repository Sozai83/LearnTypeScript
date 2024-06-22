type Human = {
    name: string;
    age: number;
} | string;


const human: Human = {
    name: "Shiori",
    age: 33,
}

let developer: Human;

//interface is only for object. Type arias can be used for any types.
interface Human2 {
    name: string;
    age: number;
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

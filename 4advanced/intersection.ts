type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

type EnginnerBlogger = Engineer & Blogger;
interface EnginnerBlogger2 extends Engineer, Blogger { };

const quill: EnginnerBlogger = {
    name: 'Quill',
    role: 'Front end',
    follower: 100
}

//never
type temp = string & number

type Numberboolean = boolean | number;

type StringNumber = string | number;

//number
type Mix = Numberboolean & StringNumber;

//type of
function toUppperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }

    return '';

}


type NomadWorker = Engineer | Blogger;

//in
function describeProfile(nomadWorker: NomadWorker) {
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

type Pet = Dog | Bird;

function havePet(pet: Pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}

//only hello will appear
havePet({ speak() { console.log('hello') }, fly() { console.log('Cannot fly') } });



//tags - this can be done with interface too
class Dog2 {
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-wow');
    }
}

class Bird2 {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }

    fly() {
        console.log('flutter');
    }
}

type Pet2 = Dog2 | Bird2;

function havePet2(pet: Pet2) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
}

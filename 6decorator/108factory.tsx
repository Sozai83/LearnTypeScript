//decorator factory

function Logging2(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}
// test

function Component(template: string, selector: string) {
    //You cannot use Function for constructor
    //To be able to access the class, you need to set the object.
    return function (constructor: { new(...args: any[]): { name: string } }) {
        const mountedElement = document.querySelector(selector);
        //set contructor
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }

    }
}

@Component('<h1>{{name}{</h1>', '#app')
//decoration
@Logging2('Logging User')
class User2 {
    name = 'Quill';
    constructor() {
        console.log('User was created!');
    }
}

const decUser3 = new User2();
const decUser4 = new User2();

/**
 * 
Logging User
[class User2]
User was created!
User was created!
 * 
 */
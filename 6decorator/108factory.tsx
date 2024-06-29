//decorator factory

function Logging2(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

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
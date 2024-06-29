//
function Logging(constructor: Function) {
    console.log('Logging....');
    console.log(constructor);
}


//decoration
@Logging
class User {
    name = 'Quill';
    constructor() {
        console.log('User was created!');
    }
}

const decUser = new User();
const decUser2 = new User();

/**
 * Logging....
[class User]
User was created!
User was created!
 * 
 */
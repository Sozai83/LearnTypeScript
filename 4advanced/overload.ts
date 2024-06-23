//Function Overload - You can only use as follows.
// You cannot use it with allow function etc

//type of
function toUppperCase2(x: string): string;
function toUppperCase2(x: number): number;
function toUppperCase2(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }

    return x;
}

//const upperHello = toUppperCase2('Hello') as string;
// now it can guess the type correctly - string
const upperHello = toUppperCase2('Hello');
//number 
const upperNumber = toUppperCase2(2);



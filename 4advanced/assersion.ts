//type assesion

//HTML element | null
const input = document.getElementById('input');

//errors input.value = "test"

//If using JSX, use "as" instaed of the tag.
const input2 = <HTMLInputElement>document.getElementById('input');
const input3 = document.getElementById('input') as HTMLInputElement;

input2.value = "test";
input3.value = "no error";

(document.getElementById('input') as HTMLInputElement).value = 'initial input value'


//Non null assersion operator (Adding ! at the end)

//HTML element
const input4 = document.getElementById('input')!;
input4.innerText = "test";



//Index signature - Not to use if you can
//Add element in the type later

interface Designer {
    name: string;
    //errors - age: number (type needs to match the index signature)
    [index: string]: string;
}

const designer: Designer = {
    name: 'Quill',
    //does not error
    role: 'Web'
}

console.log(designer.role);
interface Todo {
    title: string;
    text: string;
}

//Utility type = builtin type in Typescript 
//Partial = make everything optional
/*
type Todoable = {
    title?: string | undefined;
    text?: string | undefined;
}
 */

type Todoable = Partial<Todo>

//Readonly = make everything read only
/*
type ReadTodo = {
    readonly title: string;
    readonly text: string;
}
 */
type ReadTodo = Readonly<Todo>



const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});

fetchData.then(data => {
    data.toUpperCase();
});


const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];

//https://typescriptlang.org/docs/handbook/utility-types.html

//set default
interface ResponseData<T = any> {
    data: T;
    status: number;
}

let tmp2: ResponseData;

//set default
interface ResponseData2<T extends string = any> {
    data: T;
    status: number;
}

//let tmp3: ResponseData2<any>
let tmp3: ResponseData2;


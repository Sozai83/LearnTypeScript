//Rest Parameters - expand array values - ...args

//Array
function advancedFn(...args: number[]) {

}

//Tuple
function advancedFn2(...args: [number, string, boolean]) {

}

advancedFn2(3, 'hi', true);
//errors - advancedFn2(3,'hi',true, 4);


function advancedFn3(...args: [number, string, boolean?]) {

}

advancedFn3(3, 'hi');


//Only tupple allows the following
function advancedFn4(...args: [number, string, boolean?, ...number[]]) {

}

advancedFn4(1, 'hello', true);
advancedFn4(3, 'hi', true, 4, 5);
//Argument of type '4' is not assignable to parameter of type 'boolean | undefined'.
//errors advancedFn4(3, 'hi', 4, 5);

//Label
function advancedFn5(...args: [age: number, name: string, hasPets?: boolean, ...scores: number[]]) {

}

advancedFn5(3, 'hi', true, 4, 5);

//readonly
function advancedFn6(...args: readonly [age: number, name: string, hasPets?: boolean, ...scores: number[]]) {
    //errors - because it's read only - args.push('test')
}

advancedFn6(3, 'hi', true, 4, 5);
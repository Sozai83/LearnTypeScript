
//type Conditionaltypes = number
type Conditionaltypes = 'tomato' extends string ? number : boolean;

//infer R = any
//type ConditionalTypesInfer = string
type ConditionalTypesInfer = { tomato: string } extends { tomato: infer R } ? R : boolean;

const testType: ConditionalTypesInfer = "tomato"

//Leftside = Union type: boolean
type DistributiveConditionalTypes = ('tomato' | 'pumpkin') extends 'tomato' ? number : boolean;

type DistributiveConditionalTypes2<T> = T extends 'tomato' ? number : boolean;

//let tmp4: number | boolean
let tmp4: DistributiveConditionalTypes2<'tomato' | 'pumpkin'>;

//let tmp5: NonNullable<string | number>
let tmp5: NonNullable<string | number>;
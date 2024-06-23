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


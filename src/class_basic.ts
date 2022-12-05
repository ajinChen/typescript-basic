// Interface
// Interface is a structure that defines the syntax for classes to follow.
// TS will use interface as type and check (structural subtyping)

// 1. Interface as Type
interface KeyPair {
    key: number;
    value: string;
}
let kv1: KeyPair = {key: 20, value: "dollar"};

// 2. Interface as Function Type
interface KeyValueProcessor {
    (key: number, value: string): void;
}
let kvp: KeyValueProcessor = function(key: number, value: string): void {
    console.log(key + value);
};

// 3. Interface as Array Type
interface Numlist {
    [index:number]: number
}
let numArr: Numlist = [1, 2, 3];
interface Stringlist {
    [index:string]: string
}
// create an empty object if not exist this array
let strArr: Stringlist = {};
strArr["TS"] = "TypeScript";

// 4. Optional Property (don't need to have this property, end with ?)
interface IEmployee {
    empCode: number;
    empName: string;
    empMgr?: string;
}
let emp1: IEmployee = {
    empCode: 1,
    empName: "Ajin"
};

// 5. Readonly Property (immutable)
interface Citizen {
    name: string;
    readonly SSN: number;
}

// 6. Extending Interface (extends from other interfaces)
// Interfaces can extend one or more interfaces, which can reuse the code
interface Person {
    name: string;
    gender: string;
}
interface GoogleEmp extends Person {
    empCode: number;
    SCI?: boolean;
}
let emp2: GoogleEmp = {
    name: "Unknown",
    gender: "Bi",
    empCode: 6
}

// 7. Interface of Class
interface Employee {
    // property
    empCode: number;
    name: string;
    // method
    getManagerName(empCode: number): string;
    getSalary(empCode: number): number;
}
class GoogleEmployee implements Employee {
    // property
    empCode: number;
    name: string;

    // constructor
    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    // method
    getSalary(empCode: number): number {
        return 200000;
    }
    getManagerName(empCode: number): string {
        return 'Boss';
    }
}
let emp3 = new GoogleEmployee(1, 'Ajin');


// Classes

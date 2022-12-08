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
interface IEmployeee {
    empCode: number;
    empName: string;
    empMgr?: string;
}
let emp1: IEmployeee = {
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

// 7. Interface of Class (Property + Method)
interface IEmployee {
    // property
    empCode: number;
    name: string;
    // method
    getManagerName(empCode: number): string;
    getSalary(empCode: number): number;
}



// Classes (Constructor + Properties + Methods)
// Constructor is a special type of method which is called when create an object

// 1. Class Implements Interfaces
interface IPerson {
    gender: string;
}

class GoogleEmployee implements IEmployee, IPerson {
    // property
    empCode: number;
    name: string;
    gender: string;

    // constructor
    constructor(code: number, name: string, gender: string) {
        this.empCode = code;
        this.name = name;
        this.gender = gender;
    }

    // method
    getSalary(empCode: number): number {
        return 200000;
    }
    getManagerName(empCode: number): string {
        return 'Boss';
    }
}

// 2. Create new object from the class
let emp3 = new GoogleEmployee(1, 'Ajin', 'male');

// 3. Inheritance (extends)
class Human {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Human {
    empCode: number;
    constructor(empCode: number, name: string) {
        // inheritance from superclass
        super(name);
        this.empCode = empCode;
    }
}

// 4. Method Overriding
// If not override, will use parent method
// If override, will use new define method in current class



// Abstract Class
// Abstract classes are mainly for inheritance and can't create an instance of an abstract class
// Abstract classes define behavior (abstract methods) of class, which can define methods from interface
abstract class APerson implements IPerson{
    // abstract property
    abstract empCode: number;
    gender: string;

    constructor(gender: string) {
        this.gender = gender;
    }

    // abstract class
    abstract findSalary(name: string): number;

    // normal class
    display(): void {
        console.log(this.gender);
    }
}

class Person extends APerson {
    name: string;
    empCode: number;

    constructor(name: string, gender: string, empCode: number) {
        super(gender);
        this.name = name;
        this.empCode = empCode;
    }

    findSalary(name: string): number {
        return 200000;
    }
}



// Data Modifiers
// The concept of 'encapsulation' is used to make class members public or private.

// 1. public (anywhere)
// By default, all members of a class in TS are public. Public members can be accessed anywhere without any restrictions.
class publicData {
    public data1: string;
    data2: number;
}
let pubData = new publicData();
pubData.data1 = 'data can be assigned';
pubData.data2 = 100;

// 2. private (current class)
// The private access modifier ensures that classes are visible only to that class and are not accessible outside the containing class.
class privateData {
    private data1: string;
    data2: number;
}
let privData = new privateData();
// privData.data1 = 'data cannot be assigned';
privData.data2 = 100;

// 3. protected (current class and subclass)
// The protected access modifier can be only accessed using their deriving classes and current class.
class protectedData {
    empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}

class getProtectedData extends protectedData {
    department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }

    display(): void {
        // can access protected data in subclass and current class
        console.log(this.empCode)
    }
}

// 4. readonly (anywhere but immutable)
class readOnlyedData {
    empName: string;
    readonly empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}
let obj4 = new readOnlyedData('Ajin', 3);
obj4.empCode // works
// obj4.empCode = 4; Don't work

// 5. static (Access data/method without create instance)
// The static members of a class are accessed using the class name and dot notation without creating an object
class Circle {
    // static property, can exist same name with/without static
    static pi: number = 3.14;
    pi: number = 3.1415;

    // static method
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
    calculateArea(radius: number) {
        return this.pi * radius * radius * radius;
    }
}
// Access property and method without creating instance
Circle.pi;
Circle.calculateArea(10);



// Iterators
class Frame implements Iterator<string> {

    // property
    private pointer = 0;

    // constructor
    constructor(public name: string, public strArray: string[]) { }

    // method
    public next(): IteratorResult<string> {
        if (this.pointer < this.strArray.length) {
            return {
                done: false,
                value: this.strArray[this.pointer++]
            } 
        } else {
            return {
                done: true,
                value: null
            }
        }
    }
}
let frame = new Frame("names", ["s1", "s2", "s3"]);
frame.next();



// Generators (lazy iterators)
// function* to create a generator
// yield allows a generator function to pause its communication and pass control to an external system
function* idMaker() {
    let index = 0;
    while(index < 10) {
        yield index++;
    }
}
let gen = idMaker();
console.log(gen.next());

// Generic <T> (preserving type info)
// Generics uses the type variable <T>, a special kind of variable that denotes types.
// The type variable remembers the type that the user provides and works with that particular type only. This is called preserving the type information.

// 1.Single Type Variable
// use <T> to pass T inside and use T to replace any Type variable
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Ajin", "like", "Holiday"]);

// 2.Multiple Type Variables
function displayMultiType<T, U>(id: T, name: U): void {
    console.log(typeof(id) + ", " + typeof(name));
}
displayMultiType<number, string>(1, "Ajin");

// 3.Methods and Properties of Generic Type
// Since it can be any type, we need to use methods for all types.
function displayMulti<T, U>(id: T, name: U): void {
    name.toString(); // Ok for all types
    id.toString();
}

// 4.Generic Constraints (extends)
// use <T extends U> to constraint T should be U's class or subclass
// Since T need to have U's properties and methods
class Person {
    firstname: string;
    lastname: string;
    constructor(fname: string, lname: string) {
        this.firstname = fname;
        this.lastname = lname;
    }
}

function displayConstraintType<T extends Person>(person: T): void {
    console.log(`${ person.firstname } ${ person.lastname }`);
}
let per = new Person("Bill", "Gates");
displayConstraintType(per);



// Generic Interface
// use <T> in the interface
interface IProcessor<T>
{
    result: T;
    process(a:T, b:T): T;
}
// 1. Generic Interface as Type
interface KeyPair<T, U>
{
    key: T;
    value: U;
};
let kv1: KeyPair<number, number> = { key:1, value:123 };
let kv2: KeyPair<number, string> = { key:1, value:"123" };

// 2. Generic Interface as Function Type
// use interface as function type and generic function
interface KeyValueProcessor<T, U>
{
    (key: T, value: U): void;
};
let numKVProcessor: KeyValueProcessor<number, number> = function<T, U>(key: T, value: U): void {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value);
}
numKVProcessor(1, 12345);
let strKVProcessor: KeyValueProcessor<number, string> = function<T, U>(key: T, value: U): void {
    console.log('processStrKeyPairs: key = ' + key + ', value = ' + value);
}
strKVProcessor(1, "Ajin");

// 3. Generic Interface implement by class
interface IKeyValueProcessor<T, U>
{
    process(key: T, value: U): void;
};

class kvProcessor implements IKeyValueProcessor<number, string>
{
    process(key: number, value: string): void {
        console.log(key + value);
    }
};

// 4. Generic Class
class KeyValuePairClass<T, U>
{
    private key: T;
    private value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }
}
let kvp1 = new KeyValuePairClass<number, number>(1, 12);
let kvp2 = new KeyValuePairClass<number, string>(1, "12");
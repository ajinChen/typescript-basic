// Basic Type:

// 1. number (includes float, int, double) 
let num1: number;
num1 = 2.0;
const num2: number = 1.0;

// 2. string
let str1: string;
str1 = "Next one pls";
const str2: string = 'Ajin Chen';
const str3: string = "Ajin Chen";
const str4: string = `Ajin Chen`;

// 3. boolean
let bool1: boolean;
bool1 = false;
const bool2: boolean = true;

// 4. object
let person1: {}
let person2: object
let person3: {
    name: string;
    age: number;
};
person3 = {
    name: "Ajin",
    age: 27
};
const person4: {
    name: string;
    age: number;
} = {
    name: "Ajin",
    age: 27
}

// 5. Array (strict type or any flexible type)
let arr1: string[];
let arr2: number[];
let arr3: boolean[];
let arr4: object[];
let arr5: any[];
arr5 = ["sport", 4.01, true];

arr5.push("admin")
arr5[1] = 5.0

// 6. Tuple (Fixed-length Fixed-type array), be aware about .push, it will break the tuple
let roles: [number, string, boolean]
roles = [1.1, "Ajin", true]
roles.push("Error but work")

// 7. Enum
enum Role {
    ADMIN = 0,
    WRITE = 1,
    READ_ONLY = 2
};
const role_num = Role.ADMIN;

// 8. Any (no type assignment)
let anything1: any;
const anything2: any = 8.10;

// 9. Union-types assign
function combine(input1: number | string, input2: number | boolean) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// 10. Literal-type (only support the values in type)
const liter_num = 5.6;
let ops_result: "as-number" | "as-text";
ops_result = "as-number";
ops_result = "as-any";

// 11. Alias-type (Customed-type)
type Combinable = number | string | boolean;
type ConversionDescriptor = "as-number" | "as-text";





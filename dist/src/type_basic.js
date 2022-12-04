"use strict";
// Basic Type:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. number (includes float, int, double) 
let num1;
num1 = 2.0;
const num2 = 1.0;
// 2. string
let str1;
str1 = "Next one pls";
const str2 = 'Ajin Chen';
const str3 = "Ajin Chen";
const str4 = `Ajin Chen`;
// 3. boolean
let bool1;
bool1 = false;
const bool2 = true;
// 4. object
let person1;
let person2;
let person3;
person3 = {
    name: "Ajin",
    age: 27
};
const person4 = {
    name: "Ajin",
    age: 27
};
// 5. Array (strict type or any flexible type)
let arr1;
let arr2;
let arr3;
let arr4;
let arr5;
arr5 = ["sport", 4.01, true];
arr5.push("admin");
arr5[1] = 5.0;
// 6. Tuple (Fixed-length Fixed-type array), be aware about .push, it will break the tuple
let roles;
roles = [1.1, "Ajin", true];
roles.push("Error but work");
// 7. Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["WRITE"] = 1] = "WRITE";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
const role_num = Role.ADMIN;
// 8. Any (no type assignment)
let anything1;
const anything2 = 8.10;
// 9. Union-types assign
function combine(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// 10. Literal-type (only support the values in type)
const liter_num = 5.6;
let ops_result;
ops_result = "as-number";
ops_result = "as-any";
// 12. Void-type or Undefined-type (didn't return anything)
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
let voidvalue1;
let voidvalue2;
function printResult1(num) {
    console.log('Result: ' + num);
}
function printResult2(num) {
    console.log('Result: ' + num);
    return;
}
// 13. Function-type
let combineValue1;
combineValue1 = add;
console.log(combineValue1(8, 8));
let combineValue2; // any function can be assigned
let combineValue3; // the function assigned need meet the requirement
// 14. Unknown-type (store any value)
let userInput;
userInput = 5.0;
userInput = "Ajin";
// 15. never-type for never stop function return type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
function neverStop(numPrint) {
    while (true) {
        console.log(numPrint);
    }
}

// Equality (always use === and !== except for null check)

// 1. Equal Operation: For == and !=, TS will covert type for you and defer the value, like '' and 0 will defer to false
console.log(0 == ""); // true
// 2. Strict Equal Operation: For === and !==, TS will check if in same type and same value
console.log(0 === ""); // false
// 3. Structural Equality for two object(use deepEqual)
console.log({a:123} == {a:123}); // false
console.log({a:123} === {a:123}); // false
import { deepEqual } from "assert";
console.log(deepEqual({a:123},{a:123})); // true

// Null & Undefined (Null Check)
// Undefined: something hasn't been initialized
// Null: something is currently unavailable

// 1. Check for both null and undefined
console.log(null == null) // true
console.log(undefined == undefined) // true
console.log(null == undefined) // true

function checkNullAndUndefined(arg: string | null | undefined): void {
    if (arg == null) {
        console.log("find null or undefined")
    }
}
// 2. Check for undefined / null
function checkNull(arg: string | null | undefined): void {
    if (arg === null) {
        console.log("find null only")
    }
}
// 3. Explicit possible undefined value using ?
function foo(): {a: number, b?: number} {
    return {a:1}
}

//

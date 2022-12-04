"use strict";
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        throw new Error('Incorrect input!');
    }
}
const number1 = 100;
const number2 = 2;
const result = add(number1, number2);
console.log(typeof result);
console.log(result);

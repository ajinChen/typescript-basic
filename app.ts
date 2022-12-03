function add(n1: number, n2: number) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    } else {
        throw new Error('Incorrect input!');
    }
}

const number1 = 5;
const number2 = 2.5;
const result = add(number1, number2);
let number3: number;
number3 = 10;


console.log(typeof result);
console.log(result);

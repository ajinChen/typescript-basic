function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        throw new Error('Incorrect input!');
    }
}
var number1 = '5';
var number2 = 2.5;
var result = add(number1, number2);
console.log(typeof result);
console.log(result);
